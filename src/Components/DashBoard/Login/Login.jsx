
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../Context/AuthContext';
import useAxois from '../../../Hooks/useAxois';


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const axiosSecure = useAxois();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()



    const location = useLocation();
    console.log(location)


    const onSubmit = (data) => {
        
        const userInfo={
            email:data.email,
            role:"user",
            login_time: new Date().toISOString(),
        };

        console.log(userInfo);

        signIn(data.email, data.password)
            .then((result) => {
                console.log(result.user)

                axiosSecure.post('/users',userInfo)
                .then(res=>{
                    console.log(res.data)
                })


                navigate("/dashboard")
            })
            .catch((error) => {
                console.log(error.message)
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-full max-w-md  p-8">
                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Welcome Back 👋
                </h2>


                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
                    {/* Email */}
                    <div>
                        <label className="label text-gray-700 font-semibold ">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="Enter your email"
                            className="input input-bordered w-full rounded-xl"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder="Enter your password"
                            className="input input-bordered w-full rounded-xl"
                        />

                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full rounded-xl text-lg font-semibold shadow-md"
                    >
                        Login
                    </button>
                </form>




            </div>
        </div>
    );
};

export default Login;