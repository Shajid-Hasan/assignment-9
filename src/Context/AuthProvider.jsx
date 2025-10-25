import React, { useState } from 'react';
import { AuthContext } from './Authentication';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../assets/Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const updateProfileFunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }

    const createUserWithEmailAndPasswordFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmailAndPasswordFunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmailFunc = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signOutUserFunc = () => {
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
        signInWithEmailFunc,
        signOutUserFunc,
        sendPasswordResetEmailFunc,
        updateProfileFunc
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;