import { useState, useEffect } from "react"
import { Route, useHistory } from "react-router-dom"

import './App.css';
import Layout from "./layouts/Layout"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Landing from "./screens/Landing"
import Home from "./screens/Home"
import {loginUser, registerUser, removeToken, verifyUser} from "./services/auth"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()
  
  useEffect(
    () => {
      const handleVerify = async () => {
        const userData = await verifyUser()
        setCurrentUser(userData)
      }
      handleVerify()
    }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push("/home")
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push("/home")
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >

      <Route exact path = "/">
        {/* Landing */}
        <Landing/>
      </Route>
        
      <Route exat path="/home">
          {/* Home */}
          <Home/>
      </Route>

      <Route exact path="/login">
        <Login handleLogin={handleLogin}/>
      </Route>

      <Route exact path="/register">
        {/* Register */}
        <Register handleRegister = {handleRegister} />
      </Route>

     </Layout>
    </div>
  );
}

export default App;
