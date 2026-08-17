const NotificationItem = ({ item }) => {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 transition hover:bg-[#F8F9FB] ${
        item.active ? "bg-[#F8F9FB]" : ""
      }`}
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Avatar */}

        <div className="relative">

          <img
            src={item.image}
            alt={item.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          {/* Online Dot */}

          {item.online && (
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#31C46C]" />
          )}

        </div>

        {/* Name & Time */}

        <div>

          <h4 className="text-[15px] font-normal text-[#3F434A]">
            {item.name}
          </h4>

          <p className="mt-0 text-[12px] font-normal text-[#8A9099]">
            {item.time}
          </p>

        </div>

      </div>

      {/* Close Button */}

      {item.active && (
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6] text-[20px] leading-none text-[#8A9099] transition hover:bg-[#E5E7EB]">
          ×
        </button>
      )}

    </div>
  );
};

export default NotificationItem;