import './App.css';
import { useFormik } from "formik"
import { loginSchema } from "./schema"
import { Link } from 'react-router-dom';

function Login() {
    const initialValues = {
        email: "",
        password: ""
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            console.log("🚀 ~ file: Login.jsx ~ line 9 ~ Login ~ values", values)
            action.resetForm();
        }

    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="main">
                    <div className="img">
                        <div className="login-box">
                            <div className="signin-box">
                                <h1>Sign In</h1>
                            </div>
                            <div className="details">
                                <p>Enter your account details below</p>
                            </div>
                            <div className="input-box1">
                                <input type="text" placeholder="Email address" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? <p className='p1'>{errors.email}</p> : null}
                            </div>
                            <div className="input-box2">
                                <input type="password" placeholder="Password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                {errors.password && touched.password ? <p className='p2'>{errors.password}</p> : null}
                            </div>
                            <div className="check-box">
                                <input type="checkbox" name="Keep me signed in" id="" />
                                <label htmlFor="">Keep me signed in</label>
                            </div>
                            <div className="btn">
                                <button type="submit">Get Started</button>
                            </div>
                            <div className="content">
                                <p>Don’t have an account?</p>
                                <Link className='a' to="/" >Create for free</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;
