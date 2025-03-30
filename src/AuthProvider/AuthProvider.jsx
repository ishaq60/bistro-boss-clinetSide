import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase.config";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
;
 export const AuthContext=createContext(null)
 

 const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)
  const axiosPublic=UseAxiosPublic()




useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setuser(currentUser)
        if(currentUser){
     //get something and client 
     const userInfo={ email: currentUser.email}
     axiosPublic.post('/jwt',userInfo)
     .then(res=>{
       if(res.data.token){
        localStorage.setItem('access-token',res.data.token)
       }
     })
        }
        else{
            localStorage.removeItem('access token')
           // TODO:remove token (if token in the client )
        }
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