import { auth } from './firebase';

// Sign Up
export const createUser = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const emailSignIn = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const passwordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const passwordUpdate = (password) =>
    auth.currentUser.updatePassword(password);