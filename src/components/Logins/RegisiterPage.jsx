import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import illustration from "../../assets/images/LoginImage.png";
import "./login.css"

const RegisiterPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });
  const password = watch("password");
  const onSubmit = async (data) => {
    console.log("Create Account Data:", data);
    // API call can be added here
    const userData = {
    fullName: data.fullName,
    email: data.email,
    password: data.password,
  };

  localStorage.setItem("registeredUser", JSON.stringify(userData));

  navigate("/login");
  };
  return (
    <div className="min-h-screen w-full bg-[#20963a] register-page">
      {/*   MAIN PAGE */}
      <div className="flex min-h-screen w-full items-center justify-center px-6 py-2 register-container">
        {/*  MAIN CONTENT */}
        <div className="flex w-full max-w-[1250px] items-center justify-center gap-[50px] register-wrapper">
          {/* LEFT - ILLUSTRATION */}
          <div className="hidden w-[579px] shrink-0 items-center justify-center lg:flex register-image-wrapper">
            <img
              src={illustration}
              alt="Create account illustration"
              className="w-[579px] h-[589px] object-contain register-image"
            />
          </div>
          {/* RIGHT - CREATE ACCOUNT CARD */}
          <div className="flex h-[710px] ml-50 w-[500px] shrink-0 flex-col items-center rounded-[5px] bg-white px-8 py-[20px] shadow-sm register-card">
            {/* TITLE */}
            <h2 className="mb-[15px] text-center text-[28px] font-medium text-[#333333]">
              Create Account
            </h2>
            {/* FORM */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="w-full"
            >
              {/* GOOGLE SIGN UP */}
              <button
                type="button"
                className="mx-auto flex h-[40px] w-[400px] items-center justify-start rounded-[8px] border border-[#eeeeee] bg-white transition hover:bg-[#fafafa] register-google-btn"
              >
                {/* Google Icon */}
                <svg
                  className="ml-[8px] h-[16px] w-[16px]"
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

                <span className="mx-auto text-[15px] font-medium text-[#555555]">
                  Sign Up with Google
                </span>
              </button>

              {/* DIVIDER */}
              <div className="mx-auto my-[24px] flex w-[400px] items-center register-divider">
                <div className="h-px flex-1 bg-[#eeeeee]" />

                <span className="px-[10px] text-[12px] font-normal text-[#b5b5b5]">
                  OR SIGN UP WITH EMAIL
                </span>

                <div className="h-px flex-1 bg-[#eeeeee]" />
              </div>

              {/*  FULL NAME */}
              <div className="mx-auto my-5 w-[400px] register-field">
                <label
                  htmlFor="fullName"
                  className="mb-[2px] block text-[14px] font-normal text-[#777777]"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Regina Cooper"
                  className={`block h-[40px] w-[400px] rounded-[8px] border px-[12px] text-[14px] text-[#444444] outline-none transition placeholder:text-[#999999] focus:border-[#22a447] register-input ${
                    errors.fullName ? "border-red-400" : "border-[#e8e8e8]"
                  }`}
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />

                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="mx-auto my-1 w-[400px] register-field">
                <label
                  htmlFor="email"
                  className="mb-[2px] block text-[14px] font-normal text-[#777777]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="cooper@example.com"
                  className={`block h-[40px] w-[400px] rounded-[8px] border px-[12px] text-[14px] text-[#444444] outline-none transition placeholder:text-[#999999] focus:border-[#22a447] register-input ${
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
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/*  PASSWORD */}
              <div className="mx-auto my-5 w-[400px] register-field">
                <label
                  htmlFor="password"
                  className="mb-[2px] block text-[14px] font-normal text-[#777777]"
                >
                  Password
                </label>

                <div className="relative w-[400px] register-password-wrapper">
                  <input
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`block h-[40px] w-[400px] rounded-[8px] border px-[12px] pr-[40px] text-[14px] text-[#444444] outline-none transition placeholder:text-[#999999] focus:border-[#22a447] register-input ${
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
                    className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[12px] text-[#777777]"
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

              {/*  CONFIRM PASSWORD */}
              <div className="mx-auto my-2 w-[400px] register-field">
                <label
                  htmlFor="confirmPassword"
                  className="mb-[2px] block text-[14px] font-normal text-[#777777]"
                >
                  Confirm Password
                </label>

                <div className="relative w-[400px] register-password-wrapper">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    name="confirmPassword"
                    autoComplete="new-password"
                    className={`block h-[40px] w-[400px] rounded-[8px] border px-[12px] pr-[40px] text-[14px] text-[#444444] outline-none transition placeholder:text-[#999999] focus:border-[#22a447] register-input ${
                      errors.confirmPassword
                        ? "border-red-400"
                        : "border-[#e8e8e8]"
                    }`}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  {/* Show Password */}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[12px] text-[#777777]"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/*  TERMS  */}
              <div className="mx-auto my-3 w-[400px] register-terms">
                <label className="flex cursor-pointer items-center gap-[5px]">
                  <input
                    type="checkbox"
                    className="h-[16px] w-[16px] cursor-pointer accent-[#20a446]"
                    {...register("terms", {
                      required: "You must accept the Terms and Conditions",
                    })}
                  />

                  <span className="text-[14px] font-normal text-[#777777]">
                    I accept{" "}
                    <span className="text-[#20a446]">Terms and Conditions</span>
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/*CREATE ACCOUNT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto block h-[40px] w-[400px] rounded-[5px] bg-[#20a446] text-[15px] font-medium text-white transition hover:bg-[#198b3a] disabled:cursor-not-allowed disabled:opacity-60 register-submit-btn"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
            </form>
            {/* LOGIN */}
            <p className="mt-auto text-center mb-3 text-[14px] font-normal text-[#999999] register-login-footer">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-medium text-[#20a446] hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisiterPage;
