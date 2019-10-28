import Vue from 'vue'
import Vuex from 'vuex'

import { db, auth, storage } from '@/firebase'
import router from '@/router'
import $ from 'jquery'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserAuth: false,
    Products: [],
    Categories: [],
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
    userAuthOnState({commit}){
      auth.onAuthStateChanged(user => {
        if (user) {
          commit('setData', {
            ref: 'UserAuth',
            Data: {
              username: user.email.split('@')[0],
              uid: user.uid
            }
          })
        } else {
          // eslint-disable-next-line
          commit('setData', {
            ref: 'UserAuth',
            Data: false
          })
        }
      });
    },
    signUp({ commit }, userAuth) {
      auth.createUserWithEmailAndPassword(userAuth.email, userAuth.password)
        .then(resp => {
          resp.user.updateProfile({
            phoneNumber: userAuth.phone,
          });
          resp.user.sendEmailVerification();
          commit('setAlerts', {
            type: 0, title: 'Notificación', msg: 'El correo: <b>' + resp.user.email + '</b> fue registrado correctamente!',
          });
        })
        .catch(error => {
          commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
        });
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
          commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
        });
    },
    signOut({ commit }) {
      auth.signOut();
      commit('setData', {
        ref: 'UserAuth',
        Data: null
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
            commit('setAlerts', { type: 1, title: 'Error', msg: error.message });
          });
      })
    },
    // eslint-disable-next-line no-unused-vars
    addData({ dispatch, commit }, objects) {
      objects.forEach(obj => {
        var Doc = Object.assign({}, obj.data);
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
    }
  }
})
