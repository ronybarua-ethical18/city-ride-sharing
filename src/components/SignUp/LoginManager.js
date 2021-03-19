import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            updateUserInfo(name);
            console.log(newUserInfo);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.success = false;
            newUserInfo.error = error.message;
            return newUserInfo;
        });
}
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            console.log(newUserInfo);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.success = false;
            newUserInfo.error = error.message;
            return newUserInfo;
        });
}
const updateUserInfo = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(function () {
        console.log('User name saved Successfully');
    }).catch(function (error) {
        console.log(error.message);
    });
}
