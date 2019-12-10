import Vue from 'vue'
import Vuex from 'vuex'

import { db, storage, auth, firebase } from '@/firebase'
import router from '@/router'
import $ from "jquery";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserAuth: false,
    Products: [],
    Product: {},
    Sections: [],
    Section: {},
    file: false,
    alert: {},
    Users: [],
    Orders: [],
    Order: {},
  },
  mutations: {
    setDatas(state, obj) {
      eval('state.' + obj.ref + ' = obj.Datas');
    },
    setData(state, obj) {
      eval('state.' + obj.ref + ' = obj.Data');
    },
    setFile(state, file) {
      state.file = file;
    },
    setAlerts(state, alert) {
      state.alert = alert;
      $(".toast").toast("show");
    },
  },
  actions: {
    userAuthOnState({ dispatch, commit }) {

      auth.onAuthStateChanged(user => {

        if (user) {
          const UserAuth = this.state.UserAuth
          db.collection("Users").where("uid", "==", user.uid).get()
            .then(function (querySnapshot) {

              if (!querySnapshot.empty) {
                querySnapshot.forEach(function (doc) {
                  let Data = doc.data();
                  Data.id = doc.id;
                  Data.online = true;
                  Data.isAnonymous = user.isAnonymous;

                  if (Data.phoneNumber && !user.email) {
                    dispatch('deleteData', [{
                      ref: 'Users',
                      data: Data
                    }])

                    auth.currentUser.delete();
                    auth.signOut();
                  } else {
                    Data.email = (!Data.email && user.email) ? user.email : Data.email;

                    dispatch('updateData', [{
                      ref: 'Users',
                      data: Data
                    }])

                    if (Data.name) {
                      Data.username = Data.name;
                    } else if (Data.email) {
                      Data.username = Data.email.split('@')[0]
                    }

                    commit('setData', {
                      ref: 'UserAuth',
                      Data: Data
                    })
                  }
                });
              } else if (user.phoneNumber) {
                var Auth = {
                  phone: user.phoneNumber,
                  isAnonymous: user.isAnonymous,
                  uid: user.uid,
                  cart: (!UserAuth.cart) ? [] : UserAuth.cart
                }

                dispatch('addData', [{ ref: 'Users', data: Auth }]);
              } else {
                commit('setAlerts', {
                  type: 1,
                  title: 'Error de Registro',
                  msg: 'Debe <b>registrarse</b> para iniciar sesión con la cuenta: <b>' + user.email + '</b>'
                });
              }
            })
            .catch(function (error) {
              commit('setAlerts', { type: 1, title: 'Error: ' + error.code, msg: error.message });
            })
        }
      });
    },
    signUp({ dispatch, commit }, userAuth) {

      const Auth = this.state.UserAuth

      var credential = firebase.auth.EmailAuthProvider.credential(userAuth.email, userAuth.password);

      auth.currentUser.linkWithCredential(credential).then(function (userCred) {
        var user = userCred.user;

        Auth.email = user.email
        Auth.phone = user.phoneNumber
        Auth.isAnonymous = user.isAnonymous
        Auth.uid = user.uid

        dispatch('addData', [{ ref: 'Users', data: Auth }]);

        Auth.username = Auth.email.split('@')[0];

        commit('setData', {
          ref: 'UserAuth',
          Data: Auth
        });

      }, function (error) {
        commit('setAlerts', { type: 1, title: 'Error: ' + error.code, msg: error.message });

      });
    },
    signIn({ commit }, userAuth) {
      auth.signInWithEmailAndPassword(userAuth.email, userAuth.password)
        .then(resp => {
          commit('setAlerts', {
            type: 0, title: 'Bienvenido', msg: 'Inicio de sesión: <b>' + resp.user.email + '</b>',
          })
        })
        .catch(error => {
          commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
        });
    },
    signOut({ dispatch, commit }) {

      delete this.state.UserAuth.username;
      this.state.UserAuth.online = false;
      dispatch('updateData', [{ ref: 'Users', data: this.state.UserAuth }]);
      auth.signOut().then(() => {
        commit('setAlerts', {
          type: 0, title: 'Notificación', msg: 'Haz Cerrado la sesión',
        });
      });
      setTimeout(() => {
        window.location.href = "/"
      }, 1000);

    },
    recoverPass({ commit }, emailAddress) {

      auth.sendPasswordResetEmail(emailAddress).then(function () {
        commit('setAlerts', {
          type: 0, title: 'Notificación', msg: 'Se ha enviado un correo de recuperación',
        });
      }).catch(function (error) {
        commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
      });
    },
    getDatas({ commit }, refs) {
      refs.forEach(ref => {
        const Datas = [];
        db.collection(ref).orderBy("createTime", "desc").onSnapshot(querySnapshot => {
          Datas.length = 0;
          querySnapshot.forEach(doc => {
            let Data = doc.data();
            Data.id = doc.id;
            Datas.push(Data);
          });
        });
        commit('setDatas', { Datas, ref });
      });

    },
    getData({ commit }, objects) {
      objects.forEach(obj => {
        if (obj.id) {
          db.collection(obj.ref).doc(obj.id)
            .onSnapshot(doc => {
              let Data = doc.data();
              Data.id = doc.id;
              //creación de la variable para el global states
              let ref = obj.ref.slice(0, -1);

              commit('setData', { Data, ref });
            })
        } else {
          let Data = [];
          //creación de la variable para el global states
          let ref = obj.ref.slice(0, -1);
          commit('setData', { Data, ref });
        }
      })

    },
    updateData({ dispatch, commit }, objects) {

      objects.forEach(obj => {
        const Doc = Object.assign({}, obj.data);
        delete Doc.id
        Doc.updateTime = Date.now()
        db.collection(obj.ref).doc(obj.data.id).update(Doc)
          .then(() => {
            if (obj.file) {
              dispatch('uploadFiles', obj);
            } else {
              router.push({ name: obj.route });
            }
          })
          .catch((error) => {
            commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
          });
      })

    },
    addData({ dispatch, commit }, objects) {

      objects.forEach(obj => {
        var Doc = Object.assign({}, obj.data);
        Doc.createTime = Date.now()
        db.collection(obj.ref)
          .add(Doc)
          .then((resp) => {
            obj.data.id = resp.id;
            commit('setAlerts', { type: 0, title: 'Notificación', msg: 'El registro fue <b>agregado</b> con éxito!' });

            if (obj.file) {
              dispatch('uploadFiles', obj);
            } else {
              router.push({ name: obj.route });
            }
          })
          .catch((error) => {
            commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
          });
      });
    },
    deleteData({ dispatch, commit }, objects) {

      objects.forEach(obj => {
        db.collection(obj.ref).doc(obj.id).delete()
          .then(() => {
            if (obj.file) {
              dispatch('deleteFiles', obj);
            }
            commit('setAlerts', { type: 1, title: 'Notificación', msg: 'El registro fue <b>eliminado</b> con éxito!' });
          })
          .catch((error) => {
            commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
          })
      });
    },
    handleFileUpload({ commit }, event) {
      const file = event.target.files[0];

      if (file.type.split("/")[0] === 'image') {
        file.photoURL = URL.createObjectURL(file);
        commit('setFile', file);
      } else {
        alert('Error: El archivo no es una image. Por favor ingresar una imagen valida: JPG, PNG, GIF...');
        commit('setFile', false);
      }
    },
    async uploadFiles({ dispatch, commit }, obj) {
      try {
        const refImg = storage.ref().child(obj.file.type.split("/")[0] + '/' + obj.ref + '/' + obj.data.id + '.' + obj.file.type.split("/")[1]);
        const res = await refImg.put(obj.file);
        delete obj.file;

        if (res.state) {
          obj.data.img = await refImg.getDownloadURL();
          dispatch('updateData', [obj]);
        } else {
          alert('Error al subir el archivo/imagen');
        }
      } catch (error) {
        commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
      }
    },
    async deleteFiles({ commit }, obj) {
      try {
        // Create a reference to the file to delete
        const desertRef = storage.ref().child(obj.file.type.split("/")[0] + '/' + obj.ref + '/' + obj.id + '.' + obj.file.type.split("/")[1]);

        // Delete the file
        await desertRef.delete();
      } catch (error) {
        commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
      }
    },
    addCartItems({ dispatch, commit }, idProduct) {

      let UserAuth = this.state.UserAuth

      if (!UserAuth) {
        UserAuth = {
          isAnonymous: true,
          cart: [{ product: idProduct, quantity: 1 }]
        }
      } else {
        UserAuth.cart.forEach((item, index) => {
          if (item.product === idProduct) {
            ++UserAuth.cart[index].quantity
          }
        })

        if (!(UserAuth.cart.filter(item => {
          return item.product === idProduct
        }).length)) {
          UserAuth.cart.push({ product: idProduct, quantity: 1 })
        }

        if (UserAuth.id) {
          dispatch('updateData', [{
            ref: 'Users',
            data: UserAuth
          }])
        }
      }

      commit('setData', { ref: 'UserAuth', Data: UserAuth })

      commit('setAlerts', { type: 0, title: 'Notificación', msg: 'El producto fue <b>agregado</b> con éxito!' });
    }
  }
});