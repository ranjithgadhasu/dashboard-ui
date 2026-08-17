import { Circle, CheckCircle2 } from "lucide-react";

const ProductCheckbox = ({
  checked,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      {checked ? (
        <CheckCircle2
          size={18}
          className="text-[#22A447]"
        />
      ) : (
        <Circle
          size={18}
          className="text-[#D6DCE5]"
        />
      )}
    </button>
  );
};

export default ProductCheckbox;