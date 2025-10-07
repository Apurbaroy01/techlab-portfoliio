import axios from 'axios';


const useAxois = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:5000'
    });
    return instance;

};

export default useAxois;