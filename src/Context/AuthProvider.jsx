import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authentication';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../assets/Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

// const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const updateProfileFunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }

    const createUserWithEmailAndPasswordFunc = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmailAndPasswordFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const signInWithEmailFunction = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    // }
    const signOutUserFunc = () => {
        setLoading(true)
        return signOut(auth)
    }

    const sendPasswordResetEmailFunc = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        // signInWithEmailFunction,
        signOutUserFunc,
        sendPasswordResetEmailFunc,
        updateProfileFunc,
        loading,
        setLoading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, []);


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;

