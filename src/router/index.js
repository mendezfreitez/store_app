import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio'
import Admin from '../components/Admin'
import NuevoProducto from '../components/NuevoProducto'
import ListaProductos from '../components/ListaProductos'
import Registro from '../components/Registro'
import TerminosCondiciones from '../components/TerminosCondiciones'
import productosTodos from '../components/productosTodos'
import editarProducto from '../components/EditarProducto'
import NuevaCategoria from '../components/Categorias/NuevaCategoria'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/TerminosCondiciones',
    name: 'TerminosCondiciones',
    component: TerminosCondiciones
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/NuevoProducto',
    name: 'NuevoProducto',
    component: NuevoProducto
  },
  {
    path:'/ListaProductos',
    name:'ListaProductos',
    component:ListaProductos
    },
    {
      path: '/productosTodos',
      name: 'productosTodos',
      component: productosTodos
    },
    {
      path: '/editarProducto/:iden',
      name: 'editarProducto',
      component: editarProducto
    }
]

const router = new VueRouter({
  routes
})

export default router
