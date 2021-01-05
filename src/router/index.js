import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio'
import NuevoProducto from '../components/NuevoProducto'
import ListaProductos from '../components/ListaProductos'
import TerminosCondiciones from '../components/TerminosCondiciones'
import productosTodos from '../components/productosTodos'
import editarProducto from '../components/EditarProducto'
import Personalizar from '../components/personalizaTuCamiseta'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/TerminosCondiciones',
    name: 'TerminosCondiciones',
    component: TerminosCondiciones
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
      path: '/admin',
      name: 'admin',
      component: productosTodos
    },
    {
      path: '/editarProducto/:iden',
      name: 'editarProducto',
      component: editarProducto
    },
    {
      path: '/personalizado',
      name: 'personalizado',
      component: Personalizar      
    }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
