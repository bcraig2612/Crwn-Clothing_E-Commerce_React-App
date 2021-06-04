import firebase from 'firebase/app';
// import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBirlw4WWFYVlOC0lN_PS_qCLf0HQw5jDA",
    authDomain: "crwn-clothing-a379c.firebaseapp.com",
    projectId: "crwn-clothing-a379c",
    storageBucket: "crwn-clothing-a379c.appspot.com",
    messagingSenderId: "988480070627",
    appId: "1:988480070627:web:eea50ebba3f4aefcf876d6",
    measurementId: "G-3EHXWKSXMM"
};

// export const createUserProfileDocument = async ( userAuth, additionalData ) => {
//     if ( !userAuth ) return;

//     const userRef = firestore.doc(`users/${ userAuth.uid }`); 
//     const snapShot = await userRef.get();
//     console.log(snapShot);

    // if( !snapShot.exists ) {
    //     const { displayName, email } = userAuth;
    //     const createdAt = new Date();

    //     try {
    //         await userRef.set({
    //             displayName,
    //             email,
    //             createdAt,
    //             ...additionalData
    //         })
    //     } catch ( error ) {
    //         console.log( 'error creating user', error.message );
    //     }
    // }
    
    // return userRef;
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;