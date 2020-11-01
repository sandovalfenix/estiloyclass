import Vue from 'vue'
import Vuex from 'vuex'

import { db, storage, auth } from '@/firebase'
import router from '@/router'
import $ from "jquery";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserAuth: false,
    Categories: [],
    Products: [],
    Product: {},
    Sections: [],
    Section: {},
    files: false,
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
    setFiles(state, files) {
      state.files = files;
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
    async userAuthOnState({ dispatch, commit }) {
      try {
        await auth.onAuthStateChanged(user => {
        if (user) {
          db.collection("Users").where("uid", "==", user.uid).get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                let Data = doc.data();
                Data.id = doc.id;
                Data.online = true;
                Data.isAnonymous = user.isAnonymous;
                Data.email = user.email;

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
              });
            })
            .catch(function (error) {
              commit('setAlerts', { type: 1, title: 'Error: ' + error.code, msg: error.message });
              // eslint-disable-next-line no-console
              console.log(error)
            })
        }
      });
    
        
      } catch (error) {
        commit('setAlerts', { type: 1, title: 'Error: ' + error.code, msg: error.message });
              // eslint-disable-next-line no-console
              console.log(error)
      }
      },
    signUp({ dispatch, commit }, userAuth) {
      const Auth = (this.state.UserAuth) ? this.state.UserAuth : {}
      auth.createUserWithEmailAndPassword(userAuth.email, userAuth.password).then(() => {
        auth.onAuthStateChanged(function (user) {
          if (user) {
            const UserRef = userAuth.ref
            Auth.email = user.email
            Auth.isAnonymous = user.isAnonymous
            Auth.uid = user.uid
            Auth.cart = (Auth.cart) ? Auth.cart : []

            dispatch('addData', [{ ref: 'Users', data: Auth, userRef: UserRef }]);
          }
        });
      }).catch(function (error) {
        commit('setAlerts', { type: 1, title: 'Error: ' + error.code, msg: error.message });
      });
    },
    signIn({ commit }, userAuth) {
      auth.signInWithEmailAndPassword(userAuth.email, userAuth.password)
        .then(resp => {
          commit('setAlerts', {
            type: 0, title: 'Bienvenido', msg: 'Inicio de sesión: <b>' + resp.user.email + '</b>',
          })

          setTimeout(() => {
            window.location.href = "/"
          }, 1000);
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
      
        refs.forEach(async ref => {
          try {
            const Datas = [];
            await db.collection(ref).orderBy("createTime", "desc")
            .onSnapshot(querySnapshot => {
              Datas.length = 0; 
              querySnapshot.forEach(doc => {
                let Data = doc.data();
                Data.id = doc.id;
                Datas.push(Data);
              });
            });
            commit('setDatas', { Datas, ref });
            
            } catch (error) {
              // eslint-disable-next-line no-console
              console.log(error);
            }
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
              dispatch('uploadFile', obj);
            }

            if (obj.files) {
              obj.num = 0;
              obj.data.images = [];
              obj.files.forEach(file => {
                obj.fileImages = file;
                dispatch('uploadFiles', obj);
                obj.num++;
              });
            } else if(obj.route){
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
              dispatch('uploadFile', obj);
            }
            
            if (obj.files) {              
              obj.num = 0;
              obj.data.images = [];
              obj.files.forEach(file => {
                obj.fileImages = file;
                dispatch('uploadFiles', obj);
                obj.num++;
              });
            } else {
              router.push({ name: obj.route });
            }
          })
          .catch((error) => {
            commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
          });
      });
    },
    deleteData({ /* dispatch,  */commit }, objects) {

      objects.forEach(obj => {
        db.collection(obj.ref).doc(obj.id).delete()
          .then(() => {
            /* if (obj.files) {
              obj.num = 0;
              obj.files.forEach(file => {
                obj.file = file;
                dispatch('deleteFiles', obj);
                obj.num++;
              });
            } */
            commit('setAlerts', { type: 1, title: 'Notificación', msg: 'El registro fue <b>eliminado</b> con éxito!' });
          })
          .catch((error) => {
            commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
          })
      });
    },
    handleFileUpload({ commit }, event) {
      var file = event.target.files[0];

      if (file.type.split("/")[0] === 'image') {
        file.photoURL = URL.createObjectURL(file);
        commit('setFile', file);
      } else {
        alert('Error: El archivo no es una image. Por favor ingresar una imagen valida: JPG, PNG, GIF...');
        commit('setFile', false);
      }
    },
    async uploadFile({ dispatch, commit }, obj) {
        try {
          const refImg = storage.ref().child(obj.file.type.split("/")[0] + '/' + obj.ref + '/' + obj.data.id + '_'+(obj.num)+'.' + obj.file.type.split("/")[1]);
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
    removeFile({ commit}) {
      commit('setFile', false);
    },
    removeFiles({ commit }, obj) {
      obj.data.images.splice(obj.index, 1);
      commit('setData', { ref: 'Product', Data:obj.data });
    },
    handleFilesUpload({ commit }, event) {
      if(!this.state.files){
        this.state.files = [];
      }
      var file = event.target.files[0];

      if (file.type.split("/")[0] === 'image') {
        file.photoURL = URL.createObjectURL(file);
        this.state.files.push(file);
        commit('setFiles', this.state.files);
      } else {
        alert('Error: El archivo no es una image. Por favor ingresar una imagen valida: JPG, PNG, GIF...');
        commit('setFiles', false);
      }
    },
    async uploadFiles({ dispatch, commit }, obj) {
        try {
          const refImg = storage.ref().child(obj.fileImages.type.split("/")[0] + '/' + obj.ref + '/' + obj.data.id + '_'+(obj.num)+'.' + obj.fileImages.type.split("/")[1]);
          const res = await refImg.put(obj.fileImages);
          delete obj.files;

          if (res.state) {
            obj.data.images.push(await refImg.getDownloadURL());
            
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
        // Create a reference to the files to delete
        const desertRef = storage.ref().child(obj.file.type.split("/")[0] + '/' + obj.ref + '/' + obj.id + '_'+ (obj.num) +'.' + obj.file.type.split("/")[1]);

        // Delete the files
        await desertRef.delete();
      } catch (error) {
        commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
      }
    },
    addCartItems({ dispatch, commit }, Product) {

      let UserAuth = this.state.UserAuth

      if (UserAuth.cart) {
        if (!(UserAuth.cart.filter(item => { return item.product === Product.id }).length)) {
          UserAuth.cart.push({ product: Product.id, quantity: 1, price: Product.price })
        } else {
          UserAuth.cart.forEach((item, index) => {
            if (item.product === Product.id) {
              ++UserAuth.cart[index].quantity
            }
          })
        }

        commit('setData', { ref: 'UserAuth', Data: UserAuth })
        dispatch('updateData', [{ ref: 'Users', data: this.state.UserAuth }])

        commit('setAlerts', { type: 0, title: 'Notificación', msg: 'El producto fue <b>agregado</b> con éxito!' });
      } else {
        commit('setAlerts', {
          type: 1, title: 'Notificación', msg: 'Debes <b> iniciar sesion</b> para poder <b>agregar</b> al carro' });
      }
    },
    
  }
});