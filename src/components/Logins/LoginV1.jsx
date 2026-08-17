import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/images/LoginImage.png";
import "./login.css"

const LoginV1 = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

const onSubmit = async (data) => {
  const storedUser = localStorage.getItem("registeredUser");

  if (!storedUser) {
    alert("No registered user found. Please register first.");
    navigate("/register");
    return;
  }

  const user = JSON.parse(storedUser);

  if (
    data.email === user.email &&
    data.password === user.password
  ) {
    localStorage.setItem("isLoggedIn", "true");


    navigate("/lock-screen");
  } else {
    alert("Invalid email or password.");
  }
};

  return (
    <div className="min-h-screen w-full bg-[#20963a] login-page">
      {/* MAIN LOGIN CONTAINER */}
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 login-container">
        <div className="flex w-full max-w-full items-center justify-between login-wrapper">
          {/*  LEFT SIDE - IMAGE */}
          <div className="hidden w-full items-center justify-center lg:flex login-image-wrapper">
            <img
              src={LoginImage}
              alt="Login illustration"
              className="w-[579px] h-[589px] object-contain login-image"
            />
          </div>
          {/*  RIGHT SIDE - LOGIN CARD  */}
          <div
            className="
              flex
              h-[680px]
              w-[600px]
              flex-col
              items-center
              rounded-[5px]
              bg-white
              px-8
              py-8
              mr-15
              shadow-sm
              sm:px-10
              sm:py-9
              login-card
            "
          >
            {/*  TITLE  */}
            <h2 className="mb-5 text-center text-[28px] font-medium text-[#333333]">
              Login To Your Account
            </h2>

            {/* =====================================================
                FORM
            ====================================================== */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="w-full"
            >
              {/* =====================================================
                  GOOGLE LOGIN
              ====================================================== */}
              <button
                type="button"
                className="mx-auto flex h-[40px] w-[400px] items-start justify-start gap-2 rounded-[15px] border border-[#eeeeee] bg-white text-[10px] text-[#555555] transition hover:bg-[#fafafa] google-login"
              >
                {/* Google Icon */}
                <svg
                  className="mt-3 ml-2 w-[16px] h-[16px]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.26z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.5c2.63 0 4.84-.87 6.45-2.37l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.5z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.54 13.57A5.86 5.86 0 0 1 6.23 12c0-.54.09-1.07.31-1.57V7.9H3.3A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.1l3.24-2.53z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 6.4c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.83 3.51 14.63 2.5 12 2.5A9.74 9.74 0 0 0 3.3 7.9l3.24 2.53C7.31 8.12 9.46 6.4 12 6.4z"
                  />
                </svg>

                <span className="text-[15px] ml-25 mt-2 font-medium">
                  Login With Google
                </span>
              </button>

              {/* =====================================================
                  DIVIDER
              ====================================================== */}
              <div className="mx-auto my-8 flex w-[400px] items-center login-divider">
                <div className="h-px flex-1 bg-[#eeeeee]" />

                <span className="px-3 text-[12px] font-normal text-[#b5b5b5]">
                  OR LOGIN WITH EMAIL
                </span>

                <div className="h-px flex-1 bg-[#eeeeee]" />
              </div>

              {/* =====================================================
                  EMAIL
              ====================================================== */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[14px] font-normal text-[#777777] email-label"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="cooper@example.com"
                  className={`mx-auto block h-[40px] w-[400px] rounded-[15px] border px-3 text-[14px] text-[#444444] outline-none transition placeholder:text-[#bdbdbd] focus:border-[#22a447] login-input ${
                    errors.email ? "border-red-400" : "border-[#e8e8e8]"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />

                {errors.email && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="mb-3 mt-10">
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-[14px] font-normal text-[#777777] pass-label"
                >
                  Password
                </label>

                <div className="relative mx-auto w-[400px] password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••"
                    autoComplete="new-password"
                    className={`mx-auto block h-[40px] w-[400px] rounded-[15px] border px-3 pr-10 text-[15px] text-[#444444] outline-none transition placeholder:text-[#bdbdbd] focus:border-[#22a447] login-input ${
                      errors.password ? "border-red-400" : "border-[#e8e8e8]"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  {/* Show Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#999999] hover:text-[#555555]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/*  REMEMBER + FORGOT */}
              <div className="mx-auto mb-4 flex w-[400px] items-center justify-between login-options">
                <label className="flex mt-4 cursor-pointer items-center gap-1.5">
                  <input
                    type="checkbox"
                    className="h-[16px] w-[16px] cursor-pointer accent-[#20a446]"
                    {...register("rememberMe")}
                  />

                  <span className="text-[14px] text-[#777777]">
                    Remember Me
                  </span>
                </label>
                <button
                  onClick={() => navigate("/forgot-password")}
                  type="button"
                  className="text-[14px] mt-4 font-normal text-[#20a446] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/*  LOGIN BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto block mt-8 h-[40px] w-[400px] rounded-[5px] bg-[#20a446] text-[15px] font-medium text-white transition hover:bg-[#198b3a] disabled:cursor-not-allowed disabled:opacity-60 login-button"
              >
                {isSubmitting ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* =====================================================
                SIGN UP
            ====================================================== */}
            <p className="mt-20 text-center text-[14px] text-[#999999] signup-section">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="font-medium text-[14px] text-[#20a446] hover:underline "
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginV1;
