import './Login.scss'

const Login = () => {
    return (
        <div className="background">
            <form className="login">
                <h1 className="title">Login</h1>
                <label htmlFor="username">
                    Username
                    <input type="text" />
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" />
                </label>
                <button>Login</button>
                <span>Don't have an account? <span className='link'>Register Here</span></span>
            </form>
        </div>
    )
}

export default Login;