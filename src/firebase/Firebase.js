import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAQhtvx3KPtR0ox_T_-N-8fByeKedRJ5I8",
  authDomain: "pokeapi-4857b.firebaseapp.com",
  databaseURL: "https://pokeapi-4857b.firebaseio.com",
  projectId: "pokeapi-4857b",
  storageBucket: "pokeapi-4857b.appspot.com",
  messagingSenderId: "452725251126",
  appId: "1:452725251126:web:d320ea786ffa79e9328c97",
  measurementId: "G-D258XNSGBD",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()

  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .catch(function (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        var pendingCred = error.credential

        var provider = new firebase.auth.GoogleAuthProvider()

        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function () {
            firebase.User.prototype.linkWithCredential(pendingCred)
          })
      }
    })
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithPopup(googleProvider)
}
