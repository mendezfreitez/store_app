import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cantidadCarro: 0,
    ProductosCarro: [],
    Sesion: false,
    sesionUsuario: "",
    textoTotalCarro: "",
    categorias: [],
    productosTodos_: [],
    productosTodos: [],
    url: 'https://storeapp-back-end.herokuapp.com/'
  },
  mutations: {
    modificarCarro(state, productos) {
      state.cantidadCarro = productos.length;
      state.ProductosCarro = productos;
      localStorage.setItem("cantProductosCarro", productos.length);
      localStorage.setItem("productosCarro", JSON.stringify(productos));
      // console.log(productos);
    },
    modifCantProducto(state, { id, cantidad }) {
      // console.log("PRIMERO UNA PRUEBA")
      console.log(state.ProductosCarro);
      // console.log("id: " + id)
      console.log("cantidad: " + cantidad);
    },
    modifPuraCantidad(state, cant) {
      state.cantidadCarro = cant;
    },
    sesion_(state, { resul, usuar }) {
      state.Sesion = resul;
      // console.log(usuar);
      state.sesionUsuario = usuar.usuario;
      console.log(`Sesion: ${state.Sesion}\nUsuario: ${state.sesionUsuario}`);
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
        console.log(res.data)
          }
        );
    },
    updateProductosTodos(state, productos) {
      state.productosTodos_ = productos;
    }
  },
});