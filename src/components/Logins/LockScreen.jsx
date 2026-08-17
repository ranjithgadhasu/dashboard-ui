import { useNavigate } from "react-router-dom";
import { useState } from "react";
import illustration from "../../assets/images/LoginImage.png";
import profileImage from "../../assets/images/FavoriteImage.png";
import "./login.css"

const LockScreen = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  const password = e.target.password.value.trim();

  const storedUser = localStorage.getItem("registeredUser");

  if (!storedUser) {
    alert("No registered user found.");
    navigate("/register");
    return;
  }

  const user = JSON.parse(storedUser);

  if (password !== user.password) {
    alert("Incorrect password.");
    navigate("/four-not");
    return;
  }

  localStorage.setItem("isLocked", "false");

  navigate("/dashboard-main");
};

  return (
    <div className="min-h-screen w-full bg-[#20963a] lock-screen-page">
      <div className="flex min-h-screen w-full items-center justify-center px-6 py-2 lock-screen-container">
        <div className="flex w-full max-w-[1250px] items-center justify-center gap-[50px] lock-screen-wrapper">
          <div className="hidden w-[579px] shrink-0 items-center justify-center lg:flex lock-screen-image-wrappe">
            <img
              src={illustration}
              alt="Lock screen illustration"
              className="h-[589px] w-[579px] object-contain lock-screen-image"
            />
          </div>

          <div className="flex h-[700px] w-[600px] shrink-0 flex-col items-center rounded-[5px] bg-white px-8 py-[40px] shadow-sm lock-screen-card">
            <div className="mb-[18px] mt-25 flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-full bg-[#df866f] lock-profile-wrapper">
              <img
                src={profileImage}
                alt="Ronald Robertson"
                className="h-full w-full object-cover lock-profile-image"
              />
            </div>
            <h2 className="mb-[5px] text-center text-[28px] font-medium text-[#333333]">
              Ronald Robertson
            </h2>

            <p className="mb-[32px] text-center text-[14px] font-normal text-[#999999]">
              Enter your password to access the admin.
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full"
            >
              <div className="mx-auto w-[400px] lock-password-field">
                <label
                  htmlFor="password"
                  className="mb-[5px] block text-[14px] font-normal text-[#777777]"
                >
                  Password
                </label>
                <div className="relative w-[400px] lock-password-wrapper">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                    className="block h-[40px] w-[400px] rounded-[8px] border border-[#e8e8e8] px-[12px] pr-[45px] text-[14px] text-[#444444] outline-none transition placeholder:text-[#999999] focus:border-[#22a447] lock-password-input"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[12px] text-[#777777] hover:text-[#555555] "
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="mx-auto mt-[16px] block h-[40px] w-[400px] rounded-[5px] bg-[#20a446] text-[15px] font-medium text-white transition hover:bg-[#198b3a] lock-unlock-btn"
              >
                Unlock
              </button>
            </form>

            <p className="mt-auto mb-[5px] text-center text-[14px] font-normal text-[#999999] lock-screen-footer">
              Not you?{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="font-medium text-[#20a446] hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;