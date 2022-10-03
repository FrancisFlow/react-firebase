import React, {useContext, useState, useEffect} from "react";
import auth from "../Firebase.js";

const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)

}
const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] =  useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password)

    }
    useState(()=>{
      const unsubscribe =  auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
        })
        return unsubscribe
    }, []);
  

    const value= {
        currentUser,
        signup,
    }
    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;