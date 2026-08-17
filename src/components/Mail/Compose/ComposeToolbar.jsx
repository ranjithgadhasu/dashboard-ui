import {
  Type,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Link2,
  Smile,
  Image as ImageIcon,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";

const buttonClass =
  "flex h-8 w-8 items-center justify-center rounded-md text-[#6B7280] transition hover:bg-[#F3F4F6] hover:text-[#22963F]";

const Divider = () => (
  <div className="mx-1 h-5 w-px bg-[#E5E7EB]" />
);

const ComposeToolbar = () => {
  return (
    <div className="flex h-11 items-center gap-1 border-b border-[#E5E7EB] bg-[#F8F9FB] px-3">

      {/* Font */}
      <button className={buttonClass}>
        <Type size={16} />
      </button>

      <button className="flex items-center justify-center rounded-md px-1 text-[#6B7280] transition hover:bg-[#F3F4F6] hover:text-[#22963F]">
        <ChevronDown size={14} />
      </button>

      <Divider />

      {/* Formatting */}
      <button className={buttonClass}>
        <Bold size={16} />
      </button>

      <button className={buttonClass}>
        <Italic size={16} />
      </button>

      <button className={buttonClass}>
        <Underline size={16} />
      </button>

      <Divider />

      {/* Link */}
      <button className={buttonClass}>
        <Link2 size={16} />
      </button>

      {/* Emoji */}
      <button className={buttonClass}>
        <Smile size={16} />
      </button>

      {/* Image */}
      <button className={buttonClass}>
        <ImageIcon size={16} />
      </button>

      <Divider />

      {/* Lists */}
      <button className={buttonClass}>
        <List size={16} />
      </button>

      <button className={buttonClass}>
        <ListOrdered size={16} />
      </button>

      <Divider />

      {/* Alignment */}
      <button className={buttonClass}>
        <AlignLeft size={16} />
      </button>

      <button className={buttonClass}>
        <AlignCenter size={16} />
      </button>

      <button className={buttonClass}>
        <AlignRight size={16} />
      </button>

      <button className={buttonClass}>
        <AlignJustify size={16} />
      </button>

    </div>
  );
};

export default ComposeToolbar;