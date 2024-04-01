import { auth } from "./Firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, } from "firebase/auth";


export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth,email, password);
}

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth,email, password);
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
}

export const doForgetPassword = async (email: string) => {
    return await sendPasswordResetEmail(auth,email);
}

export const doSignOut = async () => {
    return await signOut(auth);
}

export const doPasswordReset = async (email: string) => {
    return await sendPasswordResetEmail(auth,email);
}


