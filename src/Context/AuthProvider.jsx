import { useEffect, useState } from "react";
import AuthContext from "./AuthContext"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("User:", user || "NO User")
            setUser(user)
            setLoading(false)
        });
        return unsubscribe;
    }, [])


    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        signIn,
        user,
        logOut,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;