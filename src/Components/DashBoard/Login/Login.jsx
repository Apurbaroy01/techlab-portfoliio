
import { useForm } from 'react-hook-form';
import { useLocation, } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit } = useForm();
  
 

    const location = useLocation();
    console.log(location)


    const onSubmit = (data) => {
        console.log(data);

        // signIn(data.email, data.password)
        //     .then((result) => {
        //         console.log(result.user)
        //         navigate(from)

        //     })
        //     .catch((error) => {
        //         console.log(error.message)
        //     })
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