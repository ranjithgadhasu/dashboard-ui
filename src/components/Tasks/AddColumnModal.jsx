import { X } from "lucide-react";
import { useState } from "react";

const colors = [
  "#F5B400",
  "#1CC8EE",
  "#32C766",
  "#FF6B6B",
  "#9C27B0",
];

const AddColumnModal = ({
  open,
  onClose,
}) => {

  const [name, setName] = useState("");

  const [color, setColor] = useState(colors[0]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
      />

      <div
        className="
          fixed
          left-1/2
          top-1/2
          z-50
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-3xl
          bg-white
          p-8
          shadow-2xl
        "
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5"
        >
          <X />
        </button>

        <h2 className="mb-6 text-2xl font-semibold">
          Add New Column
        </h2>

        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Column name"
          className="
            mb-8
            h-12
            w-full
            rounded-xl
            border
            px-4
            outline-none
          "
        />

        <p className="mb-3 font-medium">
          Choose Color
        </p>

        <div className="mb-8 flex gap-3">

          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`
                h-9
                w-9
                rounded-full
                border-4
                ${
                  color === c
                    ? "border-black"
                    : "border-transparent"
                }
              `}
              style={{
                background: c,
              }}
            />
          ))}

        </div>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
              rounded-xl
              border
              px-6
              py-2
            "
          >
            Cancel
          </button>

          <button
            className="
              rounded-xl
              bg-[#22983A]
              px-6
              py-2
              text-white
            "
          >
            Create
          </button>

        </div>

      </div>
    </>
  );
};

export default AddColumnModal;