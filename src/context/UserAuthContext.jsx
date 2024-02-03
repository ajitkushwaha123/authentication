import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword , 
    signInWithEmailAndPassword ,
    signOut ,
    onAuthStateChanged , 
    GoogleAuthProvider ,
    signInWithPopup
} from "firebase/auth"

import { auth } from "../components/Firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user , setUser] = useState("");
    function signup(email , password){
        return createUserWithEmailAndPassword(auth , email , password );
    }

    function login(email , password){
        return signInWithEmailAndPassword(auth , email , password );
    }

    function logout()
    {
        return signOut(auth);
    }

    function googleSignIn()
    {
        const googlAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googlAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    } , []);
    return(
        <userAuthContext.Provider value={{user , signup , login , logout , googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}
