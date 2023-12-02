import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
const auth = getAuth(app)
export const AuthContext = createContext('')


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const UserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const UserSignOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        user,
        UserLogin,
        GoogleLogin,
        UserSignOut,
        loading
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;