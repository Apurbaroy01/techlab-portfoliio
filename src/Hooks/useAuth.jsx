import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';


const useAuth = () => {

    const useAuth = useContext(AuthContext);
    return useAuth;
};

export default useAuth;