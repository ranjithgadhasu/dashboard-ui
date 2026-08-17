import {
  Paperclip,
  Smile,
  Image,
} from "lucide-react";

const CommentInput = ({
  value = "",
  onChange = () => {},
  onSubmit = () => {},
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-start gap-4">

        {/* Input Area */}
        <div className="flex-1 rounded-2xl border border-[#EEF2F7] bg-white">

          {/* Input */}
          <textarea
            rows={3}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Add Comment..."
            className="
              w-full
              resize-none
              rounded-t-2xl
              bg-transparent
              px-5
              py-4
              text-[15px]
              text-[#344054]
              placeholder:text-[#98A2B3]
              outline-none
            "
          />

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[#EEF2F7] px-4 py-3">
 {/* Button */}
            <button
              type="button"
              onClick={onSubmit}
              className="
                rounded-xl
                bg-[#22983A]
                px-6
                py-2.5
                text-[14px]
                font-medium
                text-white
                transition
                hover:bg-[#1B7A30]
              "
            >
              Comment
            </button>
            {/* Icons */}
            <div className="flex items-center gap-3">

              <button
                type="button"
                className="rounded-lg p-2 transition hover:bg-[#F8F9FB]"
              >
                <Paperclip
                  size={18}
                  className="text-[#98A2B3]"
                />
              </button>

              <button
                type="button"
                className="rounded-lg p-2 transition hover:bg-[#F8F9FB]"
              >
                <Smile
                  size={18}
                  className="text-[#98A2B3]"
                />
              </button>

              <button
                type="button"
                className="rounded-lg p-2 transition hover:bg-[#F8F9FB]"
              >
                <Image
                  size={18}
                  className="text-[#98A2B3]"
                />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CommentInput;