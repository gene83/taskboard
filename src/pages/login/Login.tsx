import { useState } from 'react';
import Axios from 'axios';
import './Login.scss'

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);

    const title = isRegister ? 'Register' : 'Login';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = {
            username: formData.get("username"),
            password: formData.get("password")
        };
        let res;

        if (isRegister) {
            res = await Axios.post('/register', user);
        } else {
            res = await Axios.post('/login', user);
        }


        console.log(res);

        localStorage.setItem('accessToken', res.data);
    }

    return (
        <div className="background">
            <form className="login" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="title">{title}</h1>
                <label htmlFor="username">
                    Username
                    <input name="username" type="text" />
                </label>
                <label htmlFor="password">
                    Password
                    <input name="password" type="password" />
                </label>
                <button className='submit'>{title}</button>
                <span>Don't have an account? {!isRegister && <button className='register' onClick={() => setIsRegister(true)}>Register Here</button>}</span>
            </form>
        </div>
    )
}

export default Login;