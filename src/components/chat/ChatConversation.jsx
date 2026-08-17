import ProfileDash from "../../assets/images/ProfileDash.png";

const messages = [
  {
    id: 1,
    type: "received",
    text: "Lorem ipsum dolor sit amet?",
    time: "09:45am",
  },
  {
    id: 2,
    type: "sent",
    text: "Consectetur adipisicing elit. Turpis risus commodo sed viverra. 🙂",
    time: "09:47am",
  },
  {
    id: 3,
    type: "received",
    text: "Sollicitudin donec posuere pharetra.",
    time: "09:48am",
  },
  {
    id: 4,
    type: "sent",
    text: "Laoreet in elementum nisl, ultrices.",
    time: "09:47am",
  },
  {
    id: 5,
    divider: true,
    label: "MONDAY",
  },
  {
    id: 6,
    type: "received",
    text: "Posuere scelerisque elit duis in. Sapien proin lectus tincidunt.",
    time: "09:45am",
  },
  {
    id: 7,
    type: "sent",
    text: "Eget cursus bibendum amet donec.",
    time: "09:47am",
  },
  {
    id: 8,
    type: "received",
    text: "Tellus accumsan, est arcu purus lacus amet. 🤯",
    time: "09:48am",
  },
  {
    id: 9,
    type: "sent",
    text: "Quam consectetur est suspendisse facilisis in viverra laoreet...",
    time: "09:47am",
  },
];

const ChatConversation = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-white px-6 py-6">

      {messages.map((item) => {

        if (item.divider) {
          return (
            <div
              key={item.id}
              className="my-8 flex items-center"
            >
              <div className="h-px flex-1 bg-[#EEF2F6]" />

              <span className="mx-4 text-[11px] font-semibold tracking-[2px] text-[#8A9099]">
                {item.label}
              </span>

              <div className="h-px flex-1 bg-[#EEF2F6]" />
            </div>
          );
        }

        if (item.type === "sent") {
          return (
            <div
              key={item.id}
              className="mb-7 flex justify-start"
            >
              {/* Avatar */}

              <img
                src={ProfileDash}
                alt=""
                className="mt-auto h-10 w-10 rounded-full object-cover shadow-md"
              />

              {/* Message */}

              <div className="ml-3">

                <div className="relative max-w-[303px] h-[72px] rounded-[50px] rounded-bl-[1px] bg-[#21943A] px-5 py-4 text-[13px] leading-6 text-white shadow">

                  {item.text}
                  {/* Tail */}

                  {/*<span className="absolute -left-[6px] bottom-1 h-3 w-4 rotate-45 rounded-[2px] bg-[#21943A]" />*/}

                </div>

                <p className="mt-2 ml-2 text-[11px] text-[#9AA0A6]">
                  {item.time}
                </p>

              </div>

            </div>
          );
        }

        return (
          <div
            key={item.id}
            className="mb-7 flex justify-end"
          >
            {/* Message */}

            <div className="mr-3">

              <div className="relative max-w-[235px] rounded-[18px] rounded-br-[6px] bg-[#F5F7FA] px-5 py-4 text-[14px] leading-6 text-[#3F434A] shadow-sm">

                {item.text}

                {/* Tail */}

                <span className="absolute -right-[6px] bottom-4 h-3.5 w-3.5 rotate-45 rounded-[2px] bg-[#F5F7FA]" />

              </div>

              <p className="mt-2 text-right text-[11px] text-[#9AA0A6]">
                {item.time}
              </p>

            </div>

            {/* Avatar */}

            <img
              src={ProfileDash}
              alt=""
              className="mt-auto h-10 w-10 rounded-full object-cover shadow-md"
            />

          </div>
        );

      })}

    </div>
  );
};

export default ChatConversation;