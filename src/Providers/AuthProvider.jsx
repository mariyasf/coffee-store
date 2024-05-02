import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Children, createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userInfo = {
        user,
        loding,
        createUser,
        signInUser,
        
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;