import React, { useState } from "react"
import { loginWithGithub, loginWithGoogle } from "./firebase/Firebase"
import './styles/LoginMenu.css'

export default function LoginMenu() {
  const [userLogged, setUserLogged] = useState(false)

  const handleLoginGitHub = () => {
    loginWithGithub().then((user) => setUserLogged(true))
  }

  const handleLoginGoogle = () => {
    loginWithGoogle().then((user) => setUserLogged(true))
  }

  return (
    <div className="loginMenu">
      {!userLogged && (
        <div>
          <button onClick={handleLoginGitHub}>Login with GitHub</button>
          <button onClick={handleLoginGoogle}>Login with Google</button>
        </div>
      )}
      {userLogged && (
        <div>
          <h1 >You are logged</h1>
        </div>
      )}
    </div>
  )
}
