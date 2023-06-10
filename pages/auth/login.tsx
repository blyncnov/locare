import React from "react";
import Link from "next/link";

// React icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

// Icon Style
const IconCardStyle = {
  fontSize: "1.5em",
};

const Login = () => {
  return (
    <div>
      <div className="auth_section">
        <div className="auth_container">
          <div className="auth_grid_column">
            <h1>
              Find The Nearest Hospitals With{" "}
              <span>
                <Link href="/">CareFinder</Link>
              </span>
            </h1>
            <p>
              CareFinder is your go-to tool for finding the nearest hospitals in
              your area.
            </p>
          </div>
          <div className="auth_grid_column">
            <div>
              <h1>Log in</h1>
              <p>
                New to CareFinder?{" "}
                <span>
                  <Link href="/auth/register">Create an account</Link>
                </span>
              </p>
            </div>
            <br />
            <div className="social_media_login_option">
              <div className="social_btn">
                <button>
                  <FaFacebook style={IconCardStyle} />
                </button>
              </div>
              <div className="social_btn">
                <button>
                  <FcGoogle style={IconCardStyle} />
                </button>
              </div>
            </div>
            <br />
            <hr style={{ border: "1px solid #F8FBFE" }} />
            <br />
            <div>
              <form className="auth_form">
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="auth_options">
                  <Link href="/auth/reset">Forgot your password?</Link>
                </div>
                <button type="submit">Log in</button>
                <li style={{ fontSize: "13px" }}>
                  By continuing, you agree CareFinder{" "}
                  <span>Terms of Service</span> and <span>Privacy Policy.</span>
                </li>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
