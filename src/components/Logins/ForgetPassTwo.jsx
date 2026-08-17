import { useNavigate } from "react-router-dom";
import { useState } from "react";
import illustration from "../../assets/images/LoginImage.png";
import Lock from "../../assets/images/Lock.png";
import "./login.css"

const ForgetPassTwo = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const resetEmail = localStorage.getItem("resetEmail") || "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = e.target.password.value.trim();
    const confirmPassword = e.target.confirmPassword.value.trim();

    if (!resetEmail) {
      alert("Please request a password reset first.");
      navigate("/forgot-password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const storedUser = localStorage.getItem("registeredUser");

    if (!storedUser) {
      alert("No registered user found.");
      navigate("/register");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email !== resetEmail) {
      alert("User email does not match.");
      navigate("/forgot-password");
      return;
    }

    const updatedUser = {
      ...user,
      password: password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(updatedUser));

    localStorage.removeItem("resetEmail");

    alert("Password reset successfully.");

    navigate("/login");
  };
  return (
    <div className="min-h-screen w-full bg-[#20963a] reset-password-page">
      <div className="flex min-h-screen w-full items-center justify-center px-6 py-2 reset-password-container">
        <div className="flex w-full max-w-[1250px] items-center justify-center gap-[50px] reset-password-wrapper">
          <div className="hidden w-[579px] shrink-0 items-center justify-center lg:flex reset-password-image-wrapper">
            <img
              src={illustration}
              alt="Reset password illustration"
              className="h-[589px] w-[579px] object-contain  reset-password-image"
            />
          </div>

          <div className="flex h-[700px] w-[600px] shrink-0 flex-col items-center rounded-[5px] bg-white px-8 py-[40px] shadow-sm reset-password-card">
            <div className="mb-[28px] flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#f7f7f7] reset-password-lock">
              <img
                src={Lock}
                alt="Lock"
                className="h-auto w-auto object-contain reset-password-lock-image"
              />
            </div>

            <h2 className="mb-[32px] text-center text-[28px] font-medium text-[#333333] reset-password-title">
              Reset Your Password
            </h2>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="mx-auto my-5 w-[400px] reset-password-field">
                <label
                  htmlFor="email"
                  className="mb-[5px] block text-[14px] font-normal text-[#777777]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={resetEmail}
                  readOnly
                  className="block h-[40px] w-[400px] rounded-[8px] border border-[#e8e8e8] bg-[#fafafa] px-[12px] text-[14px] text-[#444444] outline-none reset-password-input"
                />
              </div>

              <div className="mx-auto my-5 w-[400px] reset-password-field">
                <label
                  htmlFor="password"
                  className="mb-[5px] block text-[14px] font-normal text-[#777777]"
                >
                  Password
                </label>

                <div className="relative w-[400px] reset-password-input-wrapper">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                    className="block h-[40px] w-[400px] rounded-[8px] border border-[#e8e8e8] px-[12px] pr-[45px] text-[14px] text-[#444444] outline-none transition placeholder:text-[#999999] focus:border-[#22a447] reset-password-input"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[12px] text-[#777777] hover:text-[#555555]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="mx-auto my-5 w-[400px] reset-password-field">
                <label
                  htmlFor="confirmPassword"
                  className="mb-[5px] block text-[14px] font-normal text-[#777777]"
                >
                  Confirm Password
                </label>

                <div className="relative w-[400px] reset-password-input-wrapper">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    required
                    className="block h-[40px] w-[400px] rounded-[8px] border border-[#e8e8e8] px-[12px] pr-[45px] text-[14px] text-[#444444] outline-none transition placeholder:text-[#999999] focus:border-[#22a447] reset-password-input"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[12px] text-[#777777] hover:text-[#555555]"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mx-auto mt-[16px] block h-[40px] w-[400px] rounded-[5px] bg-[#20a446] text-[15px] font-medium text-white transition hover:bg-[#198b3a] reset-password-button"
              >
                Reset Password
              </button>
            </form>

            <p className="mt-auto mb-[5px] text-center text-[14px] font-normal text-[#999999] reset-password-footer">
              Go back to{" "}
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

export default ForgetPassTwo;
