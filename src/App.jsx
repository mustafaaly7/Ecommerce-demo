import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import Dashboard from './components/dashboard'
import New from './pages/new'
import ProductDetail from './pages/productDetail'
import OrderPage from './pages/order'
import OrderConfirmed from './pages/Orderconfirmed'
import NotFound from './pages/notFound'
import AdminLogin from './pages/admin/adminLogin'
import AdminDashboard from './pages/admin/adminDashboard'
import ManageOrders from './pages/admin/manageOrders'
import ManageUsers from './pages/admin/userManagement'
import UserProfile from './pages/userProfile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          //for login and signup pages
          <Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>

//for other pages that contains header and footer
          <Route path='/' element={<Dashboard />}>
            <Route path='/new' element={<New />} />
            <Route index element={<Home />} />
            <Route path='/product/id/:id' element={<ProductDetail />} />
            <Route path='/orders' element={<OrderPage />} />
          </Route>
          {/* For notfound page  */}
            <Route path='/userProfile' element={<UserProfile/>} />
          <Route path='*' element={<NotFound />} />

          <Route path='/order/Confirmed' element={<OrderConfirmed />} />

<Route path='/admin'>
<Route path='login' element={<AdminLogin/>} />
<Route path='dashboard' element={<AdminDashboard/>} />
<Route path='order-management' element={<ManageOrders/>} />
<Route path='user-management' element={<ManageUsers/>} />

</Route>


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
