import { useNavigate } from "react-router-dom";
import FourNotImg from "../../assets/images/FourNotImg.png";
import "./login.css"

const FourNot = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#f2fbfa] four-not-page">
      <div className="flex min-h-screen w-full items-center justify-center px-6 four-not-container">
        <div className="flex w-full max-w-[700px] flex-col items-center justify-center text-center four-not-content">

          {/* 404 IMAGE */}
          <img
            src={FourNotImg}
            alt="404 Page Not Found"
            className="mb-[25px] h-[250px] w-[586px] object-contain four-not-image"
          />

          {/* TITLE */}
          <h1 className="mb-[8px] text-[48px] font-medium text-[#3d4148] four-not-title">
            We can't seem to find that
          </h1>

          {/* DESCRIPTION */}
          <p className="mb-[24px] text-[15px] font-normal text-[#777777] four-not-description">
            The page you are looking for doesn't exist or has been moved
          </p>

          {/* BACK TO HOME */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-[5px] w-[162px] h-[40px] bg-[#20a446] px-[12px] py-[6px] text-[15px] font-medium text-white transition hover:bg-[#198b3a] four-not-button"
          >
            ← Back to Home
          </button>

        </div>
      </div>
    </div>
  );
};

export default FourNot;