import React, { useState } from 'react'
import { signUpStyles } from '../assets/DummyStyles'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { ArrowLeft, Mail, User, Lock, Eye, EyeOff } from 'lucide-react'


const SignUpPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    //to submit data
    const handleSubmit = (e) => {
        e.preventDefault();

        // enforce all fields
        if (!name.trim() || !email.trim() || !password) {
            toast.error("Please fill in all fields.", {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
            return;
        }

        // simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.", {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
            return;
        }

        // require remember me explicitly
        if (!rememberMe) {
            toast.error("Please tick 'Remember me' to continue.", {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
            return;
        }

        // === NEW: log all form data ===
        console.log("Signup form submitted — form data:", {
            name,
            email,
            password, // ⚠️ for dev only, don't log raw passwords in production
            rememberMe,
            showPassword,
            timestamp: new Date().toISOString(),
        });

        // success
        toast.success("Signup successful", {
            position: "top-right",
            autoClose: 1200,
            theme: "light",
        });

        setTimeout(() => {
            navigate("/login");
        }, 1250);
    };
    return (
        <div className={signUpStyles.pageContainer} style={signUpStyles.pageFontStyle}>
            <ToastContainer />
            <button onClick={() => navigate("/login")} className={signUpStyles.backButton}>
                <ArrowLeft className={signUpStyles.backIcon} />
                <span className={signUpStyles.backText}>Back to Login</span>
            </button>


            <div className={signUpStyles.formContainer}>
                <div className={signUpStyles.card}>
                    <div className={signUpStyles.decorativeCircle}></div>
                    <h1 className={signUpStyles.title} style={signUpStyles.pageFontStyle}>
                        Create Account
                    </h1>
                    <p className={signUpStyles.subtitle}>
                        Simple Signup to get you started - light & clean
                    </p>
                    <form onSubmit={handleSubmit} className={signUpStyles.form}>
                        <label htmlFor={signUpStyles.label}>Full Name</label>
                        <div className={signUpStyles.inputContainer}>
                            <div className={signUpStyles.inputIconContainer}>
                                <User className={signUpStyles.inputIcon} />
                            </div>
                            <input type="text" placeholder='Enter Full Name' value={name} onChange={(e) => setName(e.target.value)}
                                className={signUpStyles.inputField} required />
                        </div>

                        {/* 2 */}
                        <label htmlFor={signUpStyles.label}>Email</label>
                        <div className={signUpStyles.inputContainer}>
                            <div className={signUpStyles.inputIconContainer}>
                                <Mail className={signUpStyles.inputIcon} />
                            </div>
                            <input type="email" placeholder='your@example.com' value={email} onChange={(e) => setEmail(e.target.value)}
                                className={signUpStyles.inputField} required />
                        </div>

                        {/* passwrod */}
                        <label htmlFor={signUpStyles.label}>Password</label>
                        <div className={signUpStyles.inputContainer}>
                            <div className={signUpStyles.inputIconContainer}>
                                <Lock className={signUpStyles.inputIcon} />
                            </div>
                            <input type={showPassword ? "text" : "password"} placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)}
                                className={signUpStyles.inputField} required />
                            <button type='buton' onClick={() => setShowPassword(!showPassword)} className={signUpStyles.passwordToggleButton}>
                                {showPassword ? (
                                    <EyeOff className={signUpStyles.passwordToggleIcon} />
                                ) : (
                                    <Eye className={signUpStyles.passwordToggleIcon} />
                                )}
                            </button>
                        </div>
                        <div className={signUpStyles.checkboxContainer}>
                            <label className={signUpStyles.checkboxLabel}>
                                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} required className={signUpStyles.checkboxInput} />
                                <span className={signUpStyles.checkboxText}>Remember me</span>
                            </label>
                        </div>
                        <button type='submit' className={signUpStyles.submitButton}>Sign up</button>
                    </form>

                    <div className={signUpStyles.bottomContainer}>
                        <span className={signUpStyles.bottomText}>Already have an account? { " "}
                            <a href="/login" className={signUpStyles.loginLink}>Login</a>
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignUpPage