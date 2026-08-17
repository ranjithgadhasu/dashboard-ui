import { useNavigate } from "react-router-dom";
import illustration from "../../assets/images/LoginImage.png";
import Lock from "../../assets/images/Lock.png"
import "./login.css"

const ForgotPassword = () => {
  const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();

  const email = e.target.email.value.trim();

  const storedUser = localStorage.getItem("registeredUser");

  if (!storedUser) {
    alert("No registered user found. Please register first.");
    navigate("/register");
    return;
  }

  const user = JSON.parse(storedUser);

  if (email !== user.email) {
    alert("Email address is not registered.");
    return;
  }

  localStorage.setItem("resetEmail", email);

  alert("Password reset request successful.");

  navigate("/Reset-Your-Password");
};
  return (
    <div className="min-h-screen w-full bg-[#20963a] forgot-password-page">
      {/* Main Page */}
      <div className="flex min-h-screen w-full items-center justify-center px-6 py-2 forgot-password-container">
        {/* Main Content */}
        <div className="flex w-full max-w-[1250px] items-center justify-center gap-[50px] forgot-password-wrapper">
          {/*  LEFT - ILLUSTRATION */}
          <div className="hidden w-[579px] shrink-0 items-center justify-center lg:flex forgot-password-image-wrapper">
            <img
              src={illustration}
              alt="Recover password illustration"
              className="h-[589px] w-[579px] object-contain forgot-password-image"
            />
          </div>

          {/*   RIGHT - FORGOT PASSWORD CARD */}
          <div className="flex h-[690px] w-[600px] shrink-0 flex-col items-center rounded-[5px] bg-white px-8 py-[40px] shadow-sm forgot-password-card">
            {/*  LOCK ICON */}
            <div className="mb-[28px] flex h-[220px] w-[220px] items-center justify-center rounded-full bg-[#f7f7f7] forgot-password-lock">
              <img src={Lock} alt="lock" className="forgot-password-lock-image"/>
            </div>

            {/*  TITLE */}
            <h2 className="mb-[32px] text-center text-[28px] font-medium text-[#333333] forgot-password-title">
              Recover Your Password
            </h2>

            {/*    FORM*/}
            <form onSubmit={handleSubmit} className="w-full">
              {/*  EMAIL */}
              <div className="mx-auto w-[400px] forgot-password-field">
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
                  placeholder="cooper@example.com"
                  required
                  className="block h-[40px] w-[400px] rounded-[8px] border border-[#e8e8e8] px-[12px] text-[14px] text-[#444444] outline-none transition placeholder:text-[#999999] focus:border-[#22a447] forgot-password-input"
                />
              </div>

              {/*   RECOVER BUTTON */}
              <button
                type="submit"
                className="mx-auto mt-[16px] block h-[40px] w-[400px] rounded-[5px] bg-[#20a446] text-[15px] font-medium text-white transition hover:bg-[#198b3a] forgot-password-button"
              >
                Recover Password
              </button>
            </form>
            {/*   BACK TO LOGIN*/}
            <p className="mt-auto mb-[5px] text-center text-[14px] font-normal text-[#999999] forgot-password-footer">
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

export default ForgotPassword;
