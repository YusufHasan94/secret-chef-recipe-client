import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword (auth, email, password);
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserInfo = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            // console.log("user logged in", loggedUser);
            setUser(loggedUser);
        })
        return()=>{
            unsubscribe();
        }
    },[])          
    const authInfo = {
        user, 
        createUser,
        loginUser,
        updateUserInfo,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;