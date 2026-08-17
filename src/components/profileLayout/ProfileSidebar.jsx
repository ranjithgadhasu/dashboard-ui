import { useNavigate } from "react-router-dom";
import FavoriteImage from "../../assets/images/FavoriteImage.png";
import { FaArrowLeftLong } from "react-icons/fa6";

const favorites = [
  {
    id: 1,
    name: "Ronald Robertson",
    role: "Product Designer",
    image: FavoriteImage,
  },
  {
    id: 2,
    name: "Regina Cooper",
    role: "Project Manager",
    image: FavoriteImage,
  },
  {
    id: 3,
    name: "Judith Black",
    role: "Business Analyst",
    image: FavoriteImage,
  },
  {
    id: 4,
    name: "Dustin Williamson",
    role: "Web Developer",
    image: FavoriteImage,
  },
  {
    id: 5,
    name: "Calvin Flores",
    role: "Senior Vice President",
    image: FavoriteImage,
  },
];

const ProfileSidebar = () => {
  const navigate = useNavigate()
  return (
    <aside className="w-[290px] border-r border-[#EEF2F6] bg-white">
      
      <div className="px-6 py-8">
        <FaArrowLeftLong onClick={() => navigate("/dashboard-main")} className="cursor-pointer"/>
        {/* Profile */}
   <div className="flex flex-col items-center">
  
  <img
    src={FavoriteImage}
    alt="Profile"
    className="w-[150px] h-[150px] object-cover"
  />
  <h2 className="mt-5 text-[18px] font-semibold text-[#3F434A]">
    Felecia Brown
  </h2>

  <p className="mt-2 text-[15px] text-[#8A9099]">
    Project Manager
  </p>

  <button className="mt-6 rounded-lg bg-[#22983A] px-7 py-3 text-[15px] font-semibold text-white">
    Edit Profile
  </button>

</div>

        <div className="my-8 border-b border-[#EEF2F6]" />

        {/* INFO */}

        <div>
          <h4 className="mb-6 text-[15px] font-medium uppercase tracking-wide text-[#3F434A]">
            Info
          </h4>

          <div className="space-y-6">
            <div>
              <p className="text-[13px] font-medium uppercase text-[#8A9099]">
                Email
              </p>

              <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
                example@mail.com
              </p>
            </div>

            <div>
              <p className="text-[13px] font-medium uppercase text-[#8A9099]">
                Phone
              </p>

              <p className="mt-1 text-[14px] text-[#8A9099]">+123-4567-8800</p>
            </div>

            <div>
              <p className="text-[12px] font-medium uppercase text-[#8A9099]">
                Birthday
              </p>

              <p className="mt-1 text-[14px] text-[#8A9099]">17 March, 1995</p>
            </div>

            <div>
              <p className="text-[12px] font-medium uppercase text-[#8A9099]">
                Location
              </p>

              <p className="mt-1 text-[14px] text-[#8A9099]">New York, NY</p>
            </div>
          </div>
        </div>

        <div className="my-8 border-b border-[#EEF2F6]" />

        {/* FAVORITES */}

        <div>
          <h4 className="mb-5 text-[15px] font-medium uppercase tracking-wide text-[#3F434A]">
            Favorites
          </h4>

          <div className="space-y-5">
            {favorites.map((user) => (
              <div key={user.id} className="flex items-center gap-3">
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <h5 className="text-[14px] font-normal text-[#3F434A]">
                    {user.name}
                  </h5>
                  <p className="text-[12px] font-normal text-[#8A9099]">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
