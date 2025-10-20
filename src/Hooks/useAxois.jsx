import axios from 'axios';


const useAxois = () => {
    const instance = axios.create({
        baseURL: 'https://techlab-portfolio-server.vercel.app'
    });
    return instance;

};

export default useAxois;