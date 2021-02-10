import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    esVisible:true,
    ProductosCarro: [],
    cantidadCarro: 0,
    Sesion: false,
    sesionUsuario: "",
    textoTotalCarro: "",
    categorias: [],
    productosTodos_: [],
    productosTodos: [],
    url: 'https://storeapp-back-end.herokuapp.com/',
    // url: 'http://localhost:3000/'
  },
  mutations: {
    modificarCarro(state, productos) {
      state.cantidadCarro = productos.length
      state.ProductosCarro = productos

      const token = localStorage.getItem('token')
      if (token) {
        localStorage.setItem("carroUsuario", JSON.stringify(productos))
      }
      else {
        // localStorage.setItem("cantProductosCarro", productos.length);
        localStorage.setItem("productosCarro", JSON.stringify(productos));
      }
    },
    modifCantProducto(state, { id, cantidad }) {
      // console.log("PRIMERO UNA PRUEBA")
      // console.log(state.ProductosCarro);
      // console.log("id: " + id)
      // console.log("cantidad: " + cantidad);
    },
    modifPuraCantidad(state, cant) {
      state.cantidadCarro = cant;
    },
    modifTextoTotalCarro(state, texto) {
      state.textoTotalCarro = texto;
    },
    traerCategorias(state, arreglo) {
      axios.get(`${state.url}traerCategorias`).then(resp => {
        state.categorias = resp.data;
      });
    },
    traerProductosTodos(state, idCategoria) {
      axios.post(`${state.url}traerTodos`, { id: idCategoria }).then(res => {
            state.productosTodos = res.data;
        state.productosTodos_ = res.data;
        // console.log("estos sonlos prods")
            // console.log(res.data)
          }
        );
    },
    updateProductosTodos(state, productos) {
      state.productosTodos_ = productos;
    },
    mutarVisible(state, datos) {
      const token = localStorage.getItem('token')
      if (token != null) {
        state.esVisible = false
        state.sesionUsuario = datos.dataUsuario[0].usuario
        state.ProductosCarro = datos.dataUsuario[0].carro
        state.cantidadCarro = datos.dataUsuario[0].carro.length
        localStorage.setItem("session", datos.dataUsuario[0].usuario)
        if (datos.dataUsuario[0].carro.length > 0) {
          localStorage.setItem("carroUsuario", JSON.stringify(datos.dataUsuario[0].carro))
        }
      }
      else {
        state.esVisible = true
        state.sesionUsuario = ""
      }
    },
    getUsuario(state) {
      const token = localStorage.getItem('token')
      if (token != null) {
        state.sesionUsuario = localStorage.getItem("session")

        if (localStorage.getItem("carroUsuario")) {
          var vaine = JSON.parse(localStorage.getItem("carroUsuario"))
          state.ProductosCarro = vaine
          state.cantidadCarro = (state.ProductosCarro).length
        }
        
        state.esVisible = false
      }
      else {
        state.sesionUsuario = ""
        state.esVisible = true
        if (localStorage.getItem("productosCarro")) {
          var vaine = JSON.parse(localStorage.getItem("productosCarro"))
          state.ProductosCarro = vaine
          state.cantidadCarro = (state.ProductosCarro).length
        }
      }
    },
    dropUsuario(state) {
      const config = {
        'Content-Type': 'application/json',
        headers: {
          'x-access-token': localStorage.getItem("token")
        }
      }
      var carroUsuario = JSON.parse(localStorage.getItem("carroUsuario"))

      if (carroUsuario === null) {
        carroUsuario = []
      }

      axios.post(`${state.url}guardarCarroUsuario`, carroUsuario, config).then(function (resp) {
        if (resp.status === 200) {
          sessionStorage.clear()
          localStorage.removeItem("token")
          localStorage.removeItem("session")
          localStorage.removeItem("carroUsuario")
          state.sesionUsuario = ""
          state.esVisible = true
          console.log()
          if (localStorage.getItem("productosCarro") === null) {
            state.ProductosCarro = []
          }
          else {
            state.ProductosCarro = JSON.parse(localStorage.getItem("productosCarro"))
          }
          state.cantidadCarro = (state.ProductosCarro).length
        }
      })
    }
  },
});