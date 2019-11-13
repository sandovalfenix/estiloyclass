import Vue from 'vue'
import Vuex from 'vuex'

import { db, auth, storage, firebase } from '@/firebase'
import router from '@/router'
import $ from 'jquery'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserAuth: false,
    Products: [],
    Categories: [],
    Category: {},
    Product: {},
    alert: false,
    file: false,
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
    userAuthOnState({dispatch, commit}){
      auth.onAuthStateChanged(user => {
        if (user) {
          db.collection("Users").where("uid", "==", user.uid).get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              let Data = doc.data();
              Data.id = doc.id;
              Data.online = true;
              Data.isAnonymous = user.isAnonymous;
              
              dispatch('updateData', [{
                ref: 'Users',
                data: Data
              }])

              if (Data.email){
                Data.username = Data.email.split('@')[0]
              }
              
              commit('setData', {
                ref: 'UserAuth',
                Data: Data
              })
            });
          })
          .catch(function (error) {
            commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
          })
        } else {
          auth.signInAnonymously().catch(error => {
            commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
          });

          auth.onAuthStateChanged(function (user) {
            if (user) {
              // User is signed in.
              let Data = {
                uid: user.uid,
                isAnonymous: user.isAnonymous
              }
              dispatch('addData', [{
                ref: 'Users',
                data: Data
              }])

              commit('setData', {
                ref: 'UserAuth',
                Data: Data
              })
            }
          });
        }
      });
    },
    signUp({ dispatch, commit }, userAuth) {
      var Auth = this.state.UserAuth;
      if (Auth.isAnonymous) {
        var credential = firebase.auth.EmailAuthProvider.credential(userAuth.email, userAuth.password);

        auth.currentUser.linkWithCredential(credential).then(function (usercred) {
          var user = usercred.user;
          Auth.email = user.email;
          Auth.phone = userAuth.phone;
          Auth.isAnonymous = user.isAnonymous;

          dispatch('updateData', [{ ref: 'Users', data: Auth }]);
          
          Auth.username = Auth.email.split('@')[0];

          commit('setData', {
            ref: 'UserAuth',
            Data: Auth
          });
        }, function (error) {
            commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
        });
      } else {
        auth.createUserWithEmailAndPassword(userAuth.email, userAuth.password)
          .then(resp => {
            let Data = {
              uid: resp.user.uid,
              email: resp.user.email,
              isAnonymous: resp.user.isAnonymous,
              phone: userAuth.phone,
            }
            dispatch('addData', [{ ref: 'Users', data: Data }]);
            commit('setAlerts', {
              type: 0, title: 'Notificación', msg: 'El correo: <b>' + resp.user.email + '</b> fue registrado correctamente!',
            });
          })
          .catch(error => {
            commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
          });
      }
    },
    signIn({ commit }, userAuth) {
      auth.signInWithEmailAndPassword(userAuth.email, userAuth.password)
        .then(resp => {
          // eslint-disable-next-line
          //console.log(resp.user);
          commit('setAlerts', {
            type: 0, title: 'Bienvenido', msg: 'Inicio de sesión: <b>' + resp.user.email + '</b>',
          })
        })
        .catch(error => {
          commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
        });
    },
    signOut({ commit }) {
      auth.signOut();
      commit('setData', {
        ref: 'UserAuth',
        Data: false
      });
      commit('setAlerts', {
        type: 0, title: 'Notificación', msg: 'Haz Cerrado la sesión',
      });
    },
    getDatas({ commit }, refs) {
      refs.forEach(ref => {
        const Datas = [];
        db.collection(ref)
          .onSnapshot(querySnapshot => {
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
          db.collection(obj.ref).doc(obj.id).get()
            .then(doc => {
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
    // eslint-disable-next-line no-unused-vars
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
              commit('setAlerts', { type: 0, title: 'Notificación', msg: 'El registro fue <b>actualizado</b> con éxito!' });
              router.push({ name: obj.route });
            }
          })
          .catch((error) => {
            commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
          });
      })
    },
    // eslint-disable-next-line no-unused-vars
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
            commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
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
            commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
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
    // eslint-disable-next-line no-unused-vars
    async uploadFiles({ dispatch, commit }, obj) {
      try {
        const refImg = storage.ref().child(obj.file.type.split("/")[0] + '/' + obj.ref + '/' + obj.data.id + '.' + obj.file.type.split("/")[1]);
        const res = await refImg.put(obj.file);
        delete obj.file;

        if (res.state) {
          obj.data.img = await refImg.getDownloadURL();
          dispatch('updateData', [obj]);
          commit('setData', { Data: false, ref: 'file' });
        } else {
          alert('Error al subir el archivo/imagen');
        }
      } catch (error) {
        commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
      }
    },
    async deleteFiles({ commit }, obj) {
      try {
        // Create a reference to the file to delete
        const desertRef = storage.ref().child(obj.file.type.split("/")[0] + '/' + obj.ref + '/' + obj.id + '.' + obj.file.type.split("/")[1]);

        // Delete the file
        await desertRef.delete();
      } catch (error) {
        commit('setAlerts', { type: 1, title: 'Error: '+error.code, msg: error.message });
      }
    },
    addCartItems({ dispatch, commit }, idProduct) {
      if (this.state.UserAuth) {
        if (!this.state.UserAuth.cart) {
          this.state.UserAuth.cart = [{ product: idProduct, quantity: 1 }];
          
          dispatch('updateData', [{ ref: 'Users', data: this.state.UserAuth }]);
          
          db.collection("Users").doc(this.state.UserAuth.id)
            .onSnapshot(function(doc) {

              let Data = doc.data();
              Data.id = doc.id;

              commit('setData', {
                ref: 'UserAuth',
                Data: Data
              })
            });
        } else {
          this.state.UserAuth.cart.forEach((item, index) => {
            if (item.product === idProduct) {
              ++this.state.UserAuth.cart[index].quantity
            }
          })
          if (!(this.state.UserAuth.cart.filter(item => {
            return item.product === idProduct
          }).length)) {
            this.state.UserAuth.cart.push({ product: idProduct, quantity: 1 })
          }
          dispatch('updateData', [{ ref: 'Users', data: this.state.UserAuth }]);
        }
      }
    }
  }
})
