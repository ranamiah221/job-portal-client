import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase-init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const AuthProvider = ({ children }) => {
   const [user, setUser]= useState();
   const [loader, setLoader]= useState(true);

   const googleProvider = new GoogleAuthProvider();

   const createUser =(email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
   }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoader(false)
    })
    return ()=>{
      unSubscribe();
    }
   },[])

   const loggedUser = (email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOutUser= ()=>{
    setLoader(true)
    return signOut(auth)
   }

//    google login...
const googleLogin =()=>{
   setLoader(true);
   return signInWithPopup(auth, googleProvider)
}

    const authInfo = {
       user,
       loader,
       createUser,
       loggedUser,
       logOutUser,
       googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;