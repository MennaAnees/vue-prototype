import Home from './components/Home'
import Register from './components/user/Register'
import Login from './components/user/Login'
import UserData from './components/user/UserData'

export const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/user', component: UserData },
    { path: '*', redirect:'/'}
]