import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    }
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = ()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserInfo = (name, photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser);
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])          
    const authInfo = {
        user, 
        loading,
        createUser,
        signInWithGoogle,
        signInWithGithub,
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