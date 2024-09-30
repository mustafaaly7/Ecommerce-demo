import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Signup from './pages/signup'

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
          <Route>
            <Route path='/login' element={<Login />} />


          </Route>




        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
