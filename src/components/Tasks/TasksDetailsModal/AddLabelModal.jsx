import { useState } from "react";
import {
  X,
  Trash2,
  Plus,
  Check,
} from "lucide-react";
import Pantone from "../../../assets/images/Pantone.png"

const initialLabels = [
  {
    id: 1,
    name: "Wireframing",
    color: "#36C5F0",
  },
  {
    id: 2,
    name: "Design",
    color: "#46C765",
  },
  {
    id: 3,
    name: "Frontend",
    color: "#4CCDC1",
  },
  {
    id: 4,
    name: "Backend",
    color: "#FF6F68",
  },
];

const colors = [
  "#FF6B6B",
  "#4CCDC1",
  "#F9C74F",
  "#22983A",
  "#36C5F0",
  "#46C765",
  "#A3E635",
  "#A855F7",
  "#E85AD5",
  "#E5E7EB",
];

const AddLabelModal = ({
  open,
  onClose,
}) => {
  const [labels, setLabels] =
    useState(initialLabels);

  const [picker, setPicker] =
    useState(null);

  if (!open) return null;

  const changeColor = (
    id,
    color
  ) => {
    setLabels((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              color,
            }
          : item
      )
    );

    setPicker(null);
  };

  const deleteLabel = (id) => {
    setLabels((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/30"
      />

      {/* Modal */}
      <div
        className="
          fixed
          left-1/2
          top-1/2
          z-[100]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[28px]
          bg-white
          p-8
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-[28px] font-medium text-[#344054]">
            Add New Label
          </h2>

          <button
            onClick={onClose}
            className="rounded-full bg-[#F8F9FB] p-2"
          >
            <X
              size={18}
              className="text-[#667085]"
            />
          </button>

        </div>

        {/* Rows */}
        <div className="space-y-4">

          {labels.map((label) => (

            <div
              key={label.id}
              className="
                relative
                flex
                items-center
                rounded-2xl
                border
                border-[#EEF2F7]
                px-5
                py-4
              "
            >
              <div
                className="mr-5 h-5 w-5 rounded-md"
                style={{
                  background:
                    label.color,
                }}
              />

              <input
                value={label.name}
                onChange={(e) =>
                  setLabels((prev) =>
                    prev.map((item) =>
                      item.id ===
                      label.id
                        ? {
                            ...item,
                            name: e
                              .target
                              .value,
                          }
                        : item
                    )
                  )
                }
                className="
                  flex-1
                  bg-transparent
                  text-[20px]
                  outline-none
                "
              />

              {/* Palette */}
              <button
                onClick={() =>
                  setPicker(
                    picker ===
                      label.id
                      ? null
                      : label.id
                  )
                }
                className="mr-4"
              >
                <img src={Pantone}
                  size={20}
                  className="text-[#667085]"
                />
              </button>

              {/* Delete */}
              <button
                onClick={() =>
                  deleteLabel(
                    label.id
                  )
                }
              >
                <Trash2
                  size={20}
                  className="text-[#667085]"
                />
              </button>

              {/* Color Picker */}
              {picker ===
                label.id && (

                <div
                  className="
                    absolute
                    right-8
                    top-16
                    z-50
                    w-[340px]
                    rounded-3xl
                    bg-white
                    p-5
                    shadow-2xl
                  "
                >
                  <h4 className="mb-2 text-lg font-medium">
                    Change Color
                  </h4>
                  <div className="grid grid-cols-5 gap-4">

                    {colors.map(
                      (color) => (

                        <button
                          key={
                            color
                          }
                          onClick={() =>
                            changeColor(
                              label.id,
                              color
                            )
                          }
                          className="
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                          "
                          style={{
                            background:
                              color,
                          }}
                        >
                          {label.color ===
                            color && (
                            <Check
                              size={
                                16
                              }
                              className="text-white"
                            />
                          )}
                        </button>

                      )
                    )}

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

        {/* Add Label */}
        <button
          onClick={() =>
            setLabels([
              ...labels,
              {
                id: Date.now(),
                name: "",
                color:
                  "#22983A",
              },
            ])
          }
          className="
            mt-6
            flex
            items-center
            gap-3
            text-[18px]
            font-medium
            text-[#22983A]
          "
        >
          <Plus size={18} />
          Add Label
        </button>

        {/* Footer */}
        <div className="mt-10 flex justify-end">

          <button
            onClick={onClose}
            className="
              rounded-2xl
              bg-[#22983A]
              px-10
              py-3
              text-lg
              font-medium
              text-white
            "
          >
            Done
          </button>

        </div>

      </div>
    </>
  );
};

export default AddLabelModal;