import { useNavigate } from "react-router-dom";
import BgMain from "../../assets/images/BgMain.png";
import FavoriteImage from "../../assets/images/FavoriteImage.png";

import { FiFacebook } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";

import "./ProfileMain.css";

const ProfileMain = () => {
  const navigate = useNavigate();

  return (
    <section className="profile-main-section">
      {/* Background */}
      <div className="profile-cover">
        <img
          src={BgMain}
          alt="Profile background"
          className="profile-cover-image"
        />
      </div>

      {/* White Profile Card */}
      <div className="profile-card-wrapper">
        <div className="profile-card">
          {/* Profile Image */}

          <div className="profile-image-wrapper">
            <div className="profile-image-box">
              <img
                onClick={() => navigate("/my-profile-two")}
                src={FavoriteImage}
                alt="Ronald Robertson"
                className="profile-image"
              />
            </div>
          </div>

          {/* Name + Designation + Social */}

          <div className="profile-basic-info">
            <h1 className="profile-name">Ronald Robertson</h1>

            <p className="profile-designation">Creative Director</p>

            <div className="profile-social-icons">
              <a href="#" aria-label="Facebook" className="profile-social-link">
                <FiFacebook size={20} />
              </a>

              <a href="#" aria-label="Twitter" className="profile-social-link">
                <RiTwitterLine size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="profile-social-link"
              >
                <IoLogoInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Profile Details */}

          <div className="profile-details">
            {/* Email */}

            <div className="profile-detail-item">
              <span className="profile-detail-label">Email</span>

              <span className="profile-detail-value">robe@example.com</span>
            </div>

            {/* Birthday */}

            <div className="profile-detail-item">
              <span className="profile-detail-label">Birthday</span>

              <span className="profile-detail-value">17 March, 1995</span>
            </div>

            {/* Phone */}

            <div className="profile-detail-item">
              <span className="profile-detail-label">Phone</span>

              <span className="profile-detail-value">+1 (070) 123–8459</span>
            </div>

            {/* Location */}

            <div className="profile-detail-item">
              <span className="profile-detail-label">Location</span>

              <span className="profile-detail-value">New York, NY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileMain;
