import {
    createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    UserCredential
} from 'firebase/auth';
import { firebaseApp } from './firebase';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// Inicializa Auth y Firestore
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);



// Función para registrar usuarios
export const registerWithEmailPassword = async (
    name: string,
    email: string,
    password: string
): Promise<void> => {

    try {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
            displayName: name,
        });

        await addDoc(collection(db, 'users'), {
            name: name,
            email: email,
        });

    } catch (error) {
        if (error instanceof Error) {
            const authError = error as import('firebase/app').FirebaseError;
            if (authError.code === 'auth/email-already-in-use') {
                throw new Error('The email address is already in use.');
            }
            throw new Error(error.message);
        } else {

            throw new Error('Unknown error');
        }
    }
};

export const registerWithFacebook = async () => { 
    try {
        const provider = new FacebookAuthProvider();
        
        const credentials = await signInWithPopup(auth, provider);

        const docRef = collection(db, "users");
        const q = query(docRef, where("email", "==", credentials.user.email));

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            throw new Error('The email address is already in use.');
        } else {
            await addDoc(collection(db, 'users'), {
                name: credentials.user.displayName,
                email: credentials.user.email,
            });
        }
    }
    catch {
        throw new Error('The email address is already in use.');
    }

}

export const registerWithGoogle = async () => {

    try {
        const provider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(auth, provider);

        const docRef = collection(db, "users");
        const q = query(docRef, where("email", "==", credentials.user.email));

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            throw new Error('The email address is already in use.');
        } else {
            await addDoc(collection(db, 'users'), {
                name: credentials.user.displayName,
                email: credentials.user.email,
            });
        }
    }
    catch {
        throw new Error('The email address is already in use.');
    }
}

export const signInWithGoogle = async () => {

    try {
        const provider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(auth, provider);

        const docRef = collection(db, "users");
        const q = query(docRef, where("email", "==", credentials.user.email));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            await addDoc(collection(db, 'users'), {
                name: credentials.user.displayName,
                email: credentials.user.email,
            });
        }
    }
    catch {
        throw new Error('The email address is already in use.');
    }
}

export const signInWithEmailPassword = async (
    email: string,
    password: string
) => {
    try {
        const userCrendetils: UserCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCrendetils.user.uid;
    } catch {
        throw new Error("Error unkown ");
    }

    
}



export const logOut = async () => {
    await signOut(auth);
}


