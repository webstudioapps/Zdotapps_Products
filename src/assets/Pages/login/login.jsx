import React, { useState, useEffect } from 'react';
import styles from './login.module.css'; // Import the CSS module

// Eye icon component
const EyeIcon = ({ isVisible }) => (
    <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        {isVisible ? (
            <>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
            </>
        ) : (
            <>
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
            </>
        )}
    </svg>
);

const Login = () => {
    const [emailMobile, setEmailMobile] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [showPassword, setShowPassword] = useState(false);
    const [contactMethod, setContactMethod] = useState('');
    const [showLoginSection, setShowLoginSection] = useState(true);
    const [emailMobileError, setEmailMobileError] = useState('');
    const [passwordOtpError, setPasswordOtpError] = useState('');
    const [forgotEmail, setForgotEmail] = useState('');

    useEffect(() => {
        // Initialize Bootstrap Toasts only if bootstrap is available globally
        if (window && window.bootstrap && typeof window.bootstrap.Toast === 'function') {
            const toastElList = Array.prototype.slice.call(document.querySelectorAll('.toast'));
            toastElList.forEach(function (toastEl) {
                return new window.bootstrap.Toast(toastEl);
            });
        }

        // Add custom CSS for SweetAlert button centering
        const style = document.createElement('style');
        style.textContent = `
            .swal2-popup .swal2-actions {
                justify-content: center !important;
            }
            .swal2-popup .swal2-confirm {
                margin: 0 auto !important;
            }
            .swal-footer {
                text-align: center;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const handleEmailMobileChange = (e) => {
        const { value } = e.target;
        // Limit mobile number to 10 digits
        if (/^\d+$/.test(value) && value.length > 10) {
            setEmailMobile(value.slice(0, 10));
        } else {
            setEmailMobile(value);
        }
        setEmailMobileError(''); // Clear error on change
    };

    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) { // Only allow digits
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move focus to the next input if a digit is entered
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
        setPasswordOtpError(''); // Clear error on change
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGetKeyFrom = (method) => {
        setContactMethod(method); // Store the selected method
        if (!emailMobile) {
            setEmailMobileError("Please enter your registered email or mobile number.");
            return;
        }

        // --- Frontend Simulation of OTP sending (replace with actual API call) ---
        let message = '';
        if (method === 'whatsapp') {
            message = "Key sent to your registered mobile number via WhatsApp";
        } else if (method === 'email') {
            message = "Key sent to your registered email address";
        } else if (method === 'Ontropi') {
            message = "Key sent to your registered Ontropi App (simulated)"; // Your HTML had 'Ontropi' but referenced 'zdotapps_icon_v4.png' with alt 'Ontropi Icon' and data-value 'Ontropi'. Let's stick with 'Ontropi' for the value.
            swal("Note", "Ontropi App integration requires backend logic.", "info"); // Use swal for specific messages
        }

        // Show toast for success (if not Ontropi for now)
        if (method !== 'Ontropi') {
            const toastBody = document.getElementById('toast-msg');
            if (toastBody) {
                toastBody.innerText = message;
                const toastElement = document.querySelector('.toast');
                if (window && window.bootstrap && typeof window.bootstrap.Toast === 'function' && toastElement) {
                    const toast = new window.bootstrap.Toast(toastElement);
                    toast.show();
                }
            }
        }
        // ---------------------------------------------------------------------
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const fullOtp = otp.join('');

        if (!emailMobile) {
            setEmailMobileError("Please enter your registered email or mobile number.");
            return;
        }

        if (!password && !fullOtp) {
            setPasswordOtpError("Please enter your password or key.");
            return;
        }

        // --- Frontend Simulation of Login (replace with actual API call) ---
        console.log('Login attempt:', { emailMobile, password, otp: fullOtp });

        if ((emailMobile === 'lokesh.v@station-s.org' || emailMobile === '9121440767') && (password === '123' || fullOtp === '912144')) {
            swal("Success", "Logged in successfully!", "success");
            // Redirect to Z.flow page
            setTimeout(() => {
                window.location.href = '/z.flow';
            }, 1500); // Wait 1.5 seconds for the success message to show
        } else {
            swal("Login Failed", "Invalid credentials or OTP.", "error");
        }
        // ------------------------------------------------------------------
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        if (!forgotEmail) {
            swal("Warning", "Please enter your email ID.", "warning");
            return;
        }

        // --- Frontend Simulation of Forgot Password (replace with actual API call) ---
        console.log('Forgot password request for:', forgotEmail);
        swal("Password Reset Initiated!", "Your password (simulated) has been sent to your email.", "success");
        setShowLoginSection(true); // Go back to login after simulation
        // --------------------------------------------------------------------------
    };

    return (
        <div className={styles.imageSection}>
            {showLoginSection ? (
                <form onSubmit={handleLogin} className={styles.formContainer} id="logincheck_section">
                    <div className="text-center mb-4">
                        <img src="http://13.234.41.119/devenv/z.apps_new/assets/images/zdotapps_white.png" alt="Logo" className={styles.logo} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email_mobile">Email Id or Mobile Number</label>
                        <input
                            type="text"
                            id="email_mobile"
                            name="email_mobile"
                            className={styles.inputField}
                            value={emailMobile}
                            onChange={handleEmailMobileChange}
                            required
                            autoComplete="off"
                            placeholder="Enter your email or mobile number"
                        />
                        {emailMobileError && <span className={styles.errorMessage}>{emailMobileError}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label>Get key from:</label>
                        <div className={styles.iconContainer}>
                            <img
                                src="https://zdotapps.com/gidER/assets/img/email_icon_v5.png"
                                alt="Email Icon"
                                className={styles.icon}
                                onClick={() => handleGetKeyFrom('email')}
                            />
                            <img
                                src="https://zdotapps.com/gidER/assets/img/whatsapp_icon_v4.png"
                                alt="WhatsApp Icon"
                                className={styles.icon}
                                onClick={() => handleGetKeyFrom('whatsapp')}
                            />
                            <img
                                src="https://zdotapps.com/gidER/assets/img/zdotapps_icon_v4.png"
                                alt="Ontropi Icon"
                                className={styles.icon}
                                onClick={() => handleGetKeyFrom('Ontropi')}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Enter Key</label>
                        <div className={styles.otpContainer}>
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-input-${index}`}
                                    type="text"
                                    className={styles.otpInput}
                                    maxLength="1"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e, index)}
                                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                />
                            ))}
                        </div>
                        {passwordOtpError && <span className={styles.errorMessage}>{passwordOtpError}</span>}
                    </div>

                    <div className={styles.divider}>
                        <span>(OR)</span>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className={styles.inputField}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setPasswordOtpError(''); }}
                                placeholder="Enter your password"
                            />
                            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                                <EyeIcon isVisible={showPassword} />
                            </span>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <a className={styles.forgotPwdLink} onClick={() => setShowLoginSection(false)}>
                            Forgot Password?
                        </a>
                    </div>

                    <div className={styles.formGroup}>
                        <button type="submit" className={`btn ${styles.btn} btn-light`}>
                            Log in
                        </button>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleForgotPassword} className={styles.formContainer} id="forgot_pwd_section">
                    <div className="text-center mb-4">
                        <img src="https://zdotapps.com/gidER/images/gider%20white.png" alt="Logo" className={styles.logo} />
                    </div>

                    <div className="text-center mb-4">
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Forgotten password?</h4>
                        <p style={{ fontSize: '15px', opacity: 0.8 }}>Enter your email to reset your password:</p>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="emailID">Email Id</label>
                        <input
                            type="email"
                            id="emailID"
                            name="emailID"
                            className={styles.inputField}
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            required
                            autoComplete="off"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <button type="submit" className={`btn ${styles.btn} btn-light mb-3`}>
                            Proceed
                        </button>
                        <button type="button" className={`btn ${styles.btn} btn-secondary`} onClick={() => setShowLoginSection(true)}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            <div className={styles.toastContainer}>
                <div className="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true" style={{ backgroundColor: '#24A4C4 !important' }}>
                    <div className="d-flex">
                        <div id="toast-msg" className="toast-body">
                            <i className="bi bi-check-circle ms-2"></i>
                        </div>
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;