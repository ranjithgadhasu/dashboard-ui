

// Time slots from 01:00 to 12:00 (60px height per hour)
const HOURS = [
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
];

// Events matching the exact image cards
const EVENTS = [
  {
    id: 1,
    title: 'Project "Rocket"',
    time: "10:00 - 11:30",
    top: 30, // 30px down from 01:00
    height: 130, // vertical span
    bg: "bg-[#FFF9DB]", // Light yellow background
    border: "border-l-4 border-[#F5C242]", // Yellow left indicator bar
    text: "text-[#8A6614]",
  },
  {
    id: 2,
    title: "New Event",
    time: "10:00 - 11:30",
    top: 210, // positioned near 04:00
    height: 150,
    bg: "bg-[#E0F7FA]", // Light cyan background
    border: "border-l-4 border-[#33C2CC]", // Cyan left indicator bar
    text: "text-[#1C6B71]",
  },
  {
    id: 3,
    title: "Call Back Priscilla",
    time: "10:00 - 11:30",
    top: 410, // positioned near 07:00
    height: 60,
    bg: "bg-[#E8F8F5]", // Mint green background
    border: "border-l-4 border-[#22963F]", // Green left indicator bar
    text: "text-[#155D27]",
  },
  {
    id: 4,
    title: "Presentation",
    time: "10:00 - 11:30",
    top: 570, // positioned near 10:00
    height: 130,
    bg: "bg-[#E8F8F5]",
    border: "border-l-4 border-[#22963F]",
    text: "text-[#155D27]",
  },
];

export default function DayView({ dateTitle = "TUESDAY 7" }) {
  // Current time marker position (06:30 is 330px from top assuming 60px/hr)
  const currentTimeTop = 330;

  return (
    <div className="w-full max-w-5xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm font-sans">
      {/* Header Date Title */}
      <div className="mb-4 text-center">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {dateTitle}
        </h2>
      </div>

      {/* Main Grid Section */}
      <div className="relative grid grid-cols-[70px_1fr]">
        {/* Left Column: Time Labels */}
        <div className="flex flex-col text-xs text-gray-400">
          {HOURS.map((hour) => (
            <div key={hour} className="h-[60px] pr-3 text-right pt-2">
              {hour}
            </div>
          ))}
        </div>

        {/* Right Column: Events & Grid Container */}
        <div className="relative border-l border-gray-100 min-h-[720px]">
          {/* Horizontal Grid Lines */}
          <div className="absolute inset-0 flex flex-col pointer-events-none">
            {HOURS.map((hour) => (
              <div
                key={hour}
                className="h-[60px] border-b border-gray-100 w-full"
              />
            ))}
          </div>

          {/* Current Time Indicator Line (06:30) */}
          <div
            className="absolute left-0 right-0 z-20 flex items-center pointer-events-none"
            style={{ top: `${currentTimeTop}px` }}
          >
            {/* Red Badge */}
            <span className="absolute -left-[62px] rounded-md bg-[#FF5C5C] px-1.5 py-0.5 text-[10px] font-bold text-white">
              06:30
            </span>
            {/* Red Line */}
            <div className="h-[1.5px] w-full bg-[#FF5C5C]" />
          </div>

          {/* Render Event Cards */}
          {EVENTS.map((event) => (
            <div
              key={event.id}
              style={{ top: `${event.top}px`, height: `${event.height}px` }}
              className={`absolute left-3 right-3 z-10 rounded-xl p-3 shadow-xs transition-all hover:shadow-md cursor-pointer ${event.bg} ${event.border}`}
            >
              <p className={`text-[11px] font-normal opacity-85 ${event.text}`}>
                {event.time}
              </p>
              <p className={`mt-1 text-xs font-medium ${event.text}`}>
                {event.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}