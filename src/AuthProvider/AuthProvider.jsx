import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
;
 export const AuthContext=createContext(null)
 

 const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)
  




useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setuser(currentUser)
        console.log('current user',currentUser)
        setloading(false)
    })
    return ()=>{
        return unsubscribe()
    }
},[])




//create user
const createUser=(email,password)=>{
    setloading(true)
   return createUserWithEmailAndPassword(auth,email,password)
}

//login with email and password

const signIn=(email,password)=>{
    setloading(true)
   return signInWithEmailAndPassword(auth,email,password)
}

//GoogleLogin
const Googleprovider=new GoogleAuthProvider()
const handleGoogleLogin = () => {
    return signInWithPopup(auth, Googleprovider);
};

const logOut=()=>{
    setloading(true)
    return signOut(auth)
}

const updateUserProfile=(name,photo)=>{
 return   updateProfile(auth.currentUser, {
  displayName:name, 
  photoURL: photo
}
   )
}
    const authInfo={
user,loading,createUser,signIn,handleGoogleLogin,logOut,updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;