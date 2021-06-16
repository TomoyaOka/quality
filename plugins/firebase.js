import firebase from 'firebase/app'
//import 'firebase/firestore'
//import 'firebase/auth'
import 'firebase/functions'
//import 'firebase/storage'

import config from './../firebaseConfig.json'

if (!firebase.apps.length) {
    firebase.initializeApp({ ...config })
}

export default ({ app }, inject) => {
    inject('firebase', firebase)
    //inject('firestore', firebase.firestore())
    //inject('auth', firebase.auth())
    /* inject('authState', () => {
        return new Promise((resolve) => {
            firebase.auth().onAuthStateChanged((auth) => {
                resolve(auth || null)
            })
        })
    }) */
    inject('functions', firebase.functions())
    //inject('storage', firebase.storage())
}

//ローカルでのエミュレート設定
/* const functions = firebase.functions()
functions.useFunctionsEmulator('http://localhost:3000') */