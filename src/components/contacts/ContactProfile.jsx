
import BG from "../../assets/images/BG.png";
import AvatarFemail from "../../assets/images/AvatarFemail.png";
import ProfileDash from "../../assets/images/ProfileDash.png";


const favorites = [
  {
    id: 1,
    name: "Ronald Robertson",
    role: "Product Designer",
    image: ProfileDash,
  },
  {
    id: 2,
    name: "Regina Cooper",
    role: "Project Manager",
    image: ProfileDash,
  },
   {
    id: 3,
    name: "Judith Black",
    role: "Business Analyst",
    image: ProfileDash,
  },
  {
    id: 4,
    name: "Dustin Williamson",
    role: "Web Developer",
    image: ProfileDash,
  },
];

const ContactProfile = () => {
  return (
    <div className="bg-white p-8 contact-profile-here">

      {/* ================= Profile ================= */}

      <div className="flex flex-col items-center">

        <div className="relative h-[230px] w-[230px]">

          {/* Background */}
          <img
            src={BG}
            alt="Background"
            className="absolute top-0 left-1/2 h-[190px] w-[190px] -translate-x-1/2 object-contain"
          />

          {/* Female Illustration */}
          <img
            src={AvatarFemail}
            alt="Female Avatar"
            className="
              absolute
              h-40
              mt-7
              left-1/2
              w-30
              -translate-x-1/2
              z-10
            "
          />

          {/* Center Profile */}
          <img
            src={ProfileDash}
            alt="Profile"
            className="
              absolute
              left-1/2
              top-[70px]
              h-[40px]
              w-[40px]
              -translate-x-1/2
              rounded-full
              z-20
            "
          />

          {/* Online Status */}
          <span
            className="
              absolute
              right-[28px]
              bottom-[80px]
              h-4
              w-4
              rounded-full
              border-2
              border-white
              bg-[#35C759]
              z-30
            "
          />
        </div>

        <h2 className="mt-2 text-[24px] font-medium text-[#40434E]">
          Jane <span className="font-bold">Wilson</span>
        </h2>

        <p className="mt-1 text-[14px] font-normal text-[#9CA3AF]">
          Creative Director
        </p>

      </div>

      <div className="my-8 border-t border-[#ECECEC]" />

      {/* ================= INFO ================= */}

      <h3 className="mb-6 text-[15px] font-medium uppercase tracking-wider text-[#4B4F58]">
        Info
      </h3>

      <div className="space-y-6">

        <div className="flex gap-4">

          <div>
            <p className="text-[12px] text-medium uppercase text-[#9EA4AF]">Email</p>
            <p className="text-[14px] fonto-normal text-[#40434E]">
              black@example.com
            </p>
          </div>
        </div>

        <div className="flex gap-4">

          <div>
            <p className="text-[12px] text-medium uppercase text-[#9EA4AF]">Phone</p>
            <p className="text-[14px] text-normal text-[#40434E]">
              +1 (070) 123-8459
            </p>
          </div>
        </div>

        <div className="flex gap-4">

          <div>
            <p className="text-[12px] text-medium uppercase text-[#9EA4AF]">
              Birthday
            </p>
            <p className="text-[14px] text-normal text-[#40434E]">
              17 March, 1995
            </p>
          </div>
        </div>

        <div className="flex gap-4">

          <div>
            <p className="text-[12px] text-medium uppercase text-[#9EA4AF]">
              Location
            </p>
            <p className="text-[14px] text-normal text-[#40434E]">
              New York, NY
            </p>
          </div>
        </div>

      </div>

      <div className="my-2 border-t border-[#ECECEC]" />

      {/* ================= FAVORITES ================= */}

      <h3 className=" text-[15px] font-medium uppercase tracking-wider text-[#4B4F58]">
        Favorites
      </h3>

      <div className="space-y-2">

        {favorites.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-8 w-8 rounded-full object-cover"
            />

            <div>
              <h4 className="text-[15px] font-normal text-[#40434E]">
                {item.name}
              </h4>

              <p className="text-[13px] font-normal text-[#9AA0AA]">
                {item.role}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ContactProfile;