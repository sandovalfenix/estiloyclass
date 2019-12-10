<template>
  <div class="container space-2">
    <div class="card">
      <div class="card-body p-4">
        <!-- Activity Table -->
        <div class="table-responsive-md">
          <table class="table table-info table-hover">
            <thead>
              <tr class="text-uppercase font-size-1">
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    ID
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Usuario
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Telefono
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Nombre
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Apellido
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Estado
                  </div>
                </th>
              </tr>
            </thead>
            <tbody v-for="(User, index) in Users" :key="index" class="font-size-1">
              <tr v-if="index === 0">
                <th colspan="6" class="bg-success">Cuentas Usuarios</th>
              </tr>
              <tr v-if="!User.admin">
                <td v-if="++index < 10" class="align-middle text-secondary font-weight-normal">US00{{index}}</td>
                <td v-if="index >= 10 && index < 100" class="align-middle text-secondary font-weight-normal">US0{{index}}</td>
                <td v-if="index >= 100 && index < 1000" class="align-middle text-secondary font-weight-normal">US{{index}}</td>
                <td class="align-middle">
                  <div class="media align-items-center">
                    <span class="btn btn-sm btn-icon btn-soft-indigo rounded-circle mr-2">
                      <span class="btn-icon__inner font-weight-medium"><i class="fa fa-user-circle"></i></span>
                    </span>
                    <span>{{User.email }}</span>
                  </div>
                </td>
                <td class="align-middle">
                  <div class="media align-items-center">
                    <span class="btn btn-sm btn-icon btn-soft-indigo rounded-circle mr-2">
                      <span class="btn-icon__inner font-weight-medium"><i class="fab fa-whatsapp"></i></span>
                    </span>
                    <span>{{User.phone }}</span>
                  </div>
                </td>
                <td class="align-middle text-primary">{{User.name}}</td>
                <td class="align-middle text-dark">{{ User.lasName }}</td>
                <td class="align-middle">
                  <b v-if="User.online" class="text-success">Conectado</b>
                  <b v-else class="text-danger">Desconectado</b>
                </td>
              </tr>
            </tbody>
            <tbody v-for="(User, index) in Users" :key="User.id" class="font-size-1">
              <tr v-if="index === 0">
                <th colspan="6" class="bg-info text-white">Cuentas Administradores</th>
              </tr>
              <tr v-if="User.admin">
                <td v-if="++index < 10" class="align-middle text-secondary font-weight-normal">AD00{{index}}</td>
                <td v-if="index >= 10 && index < 100" class="align-middle text-secondary font-weight-normal">AD0{{index}}</td>
                <td v-if="index >= 100 && index < 1000" class="align-middle text-secondary font-weight-normal">AD{{index}}</td>
                <td class="align-middle">
                  <div class="media align-items-center">
                    <span class="btn btn-sm btn-icon btn-soft-indigo rounded-circle mr-2">
                      <span class="btn-icon__inner font-weight-medium"><i class="fa fa-user-circle"></i></span>
                    </span>
                    <span>{{User.email }}</span>
                  </div>
                </td>
                <td class="align-middle">
                  <div class="media align-items-center">
                    <span class="btn btn-sm btn-icon btn-soft-indigo rounded-circle mr-2">
                      <span class="btn-icon__inner font-weight-medium"><i class="fab fa-whatsapp"></i></span>
                    </span>
                    <span>{{User.phone }}</span>
                  </div>
                </td>
                <td class="align-middle text-primary">{{User.name}}</td>
                <td class="align-middle text-dark">{{ User.lasName }}</td>
                <td class="align-middle">
                  <b v-if="User.online" class="text-success">Conectado</b>
                  <b v-else class="text-danger">Desconectado</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- End Activity Table -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Users',
  created() {
    this.getDatas(['Users']);
  },
  computed: {
    ...mapState(['Users']),
  },
  methods: {
    ...mapActions(['getDatas', 'deleteData']),
  },

};
</script>
