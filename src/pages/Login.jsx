// // Login.js
// import { useRef, useState, useEffect } from "react";
// import useAuth from "../hooks/useAuth";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// import axios from "../api/axios";
// const LOGIN_URL = '/auth';

// const Login = () => {
//     const { setAuth, persist, setPersist } = useAuth();

//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');

//     useEffect(() => {
//         userRef.current.focus();
//     }, []);

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(LOGIN_URL, 
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             console.log(JSON.stringify(response?.data));
//             // console.log(response);
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             setAuth({ user, pwd, roles, accessToken });
//             setUser('');
//             setPwd('');
//             navigate(from, { replace: true });
//         } catch (err) {
//             if(!err?.response){
//                 setErrMsg('No Server Response');
//             } else if(err.response?.status === 400){
//                 setErrMsg('Missing Username or Password');
//             } else if(err.response?.status === 401){
//                 setErrMsg('Unauthorized');
//             } else{
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     const togglePersist = () => {
//         setPersist(prev => !prev);
//     }

//     useEffect(() => {
//         localStorage.setItem("persist", persist);
//     }, [persist]);

//     return (
//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Sign In</h1>

//             <form onSubmit={handleSubmit} className="mt-4">
//                 <label htmlFor="username" className="block">
//                     Username:
//                 </label>
//                 <input 
//                     type="text"
//                     id="username"
//                     ref={userRef} 
//                     autoComplete="off"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//                     onChange={(e) => setUser(e.target.value)}
//                     value={user}
//                 />
//                 <label htmlFor="password" className="block mt-2">
//                     Password:
//                 </label>
//                 <input 
//                     type="password"
//                     id="password"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//                     onChange={(e) => setPwd(e.target.value)}
//                     value={pwd}
//                 />
//                 <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Sign In</button>
//                 <div className="mt-2 flex items-center">
//                     <input 
//                         type="checkbox"
//                         id="persist"
//                         onChange={togglePersist} 
//                         checked={persist}
//                         className="mr-2"
//                     />
//                     <label htmlFor="persist">Trust This Device</label>
//                 </div>
//             </form>
//             <p className="mt-4">
//                 Need an Account?<br />
//                 <span className="line">
//                     <Link to="/register" className="text-blue-500 hover:underline">Sign Up</Link>
//                 </span>
//             </p>
//         </section>
//     )
// }

// export default Login;




import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth, persist, setPersist } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if(!err?.response){
                setErrMsg('No Server Response');
            } else if(err.response?.status === 400){
                setErrMsg('Missing Username or Password');
            } else if(err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else{
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist]);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">Sign In</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 bg-white rounded-md shadow-md">
                <label htmlFor="username" className="block">
                    Username:
                </label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef} 
                    autoComplete="off"
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                />
                <label htmlFor="password" className="block mt-4">
                    Password:
                </label>
                <input 
                    type="password"
                    id="password"
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                />
                <button className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Sign In</button>
                <div className="mt-4 flex items-center">
                    <input 
                        type="checkbox"
                        id="persist"
                        onChange={togglePersist} 
                        checked={persist}
                        className="mr-2"
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div>
            </form>
            <p className="mt-4 text-left w-full max-w-sm">
                Need an Account?<br />
                <span className="line">
                    <Link to="/register" className="text-blue-500 hover:underline">Sign Up</Link>
                </span>
            </p>
        </section>
    )
}

export default Login;

