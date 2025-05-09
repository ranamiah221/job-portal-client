import Lottie from "lottie-react";
import registerAnimation from '../../assets/animation/register.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../../components/Shared/SocialLogin";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
   
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <h1 className="text-5xl text-center font-bold my-5">Register now!</h1>
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                        
                    </form>
                    <div className="flex w-full flex-col">
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Register;