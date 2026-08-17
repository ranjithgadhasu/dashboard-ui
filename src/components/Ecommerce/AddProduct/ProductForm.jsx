import { useState } from "react";
import RichTextEditor from "./RichTextEditor";
import {
  Image as ImageIcon,
  X,
} from "lucide-react";

import Uploading from "../../../assets/images/Uploading.png"
import ProductImageUpload from "./ProductImageUpload";

const ProductForm = ({ onClose }) => {
    const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "Phone",
    price: "2.500",
    discount: "15",
  });

  const [tags, setTags] = useState([
    "Apple",
    "iPhone",
    "64GB",
  ]);

  const removeTag = (tag) => {
    setTags(tags.filter((x) => x !== tag));
  };

  return (
    <form className="space-y-6">

      {/* Product Name */}

      <div>
        <label className="mb-2 block text-[14px] font-normal text-[#8A9099]">
          Product Name
        </label>

        <input
          type="text"
          placeholder="Product Name"
          value={formData.productName}
          onChange={(e) =>
            setFormData({
              ...formData,
              productName: e.target.value,
            })
          }
          className="h-11 w-full rounded-xl border border-[#EEF2F6] px-4 text-sm outline-none focus:border-[#22963F]"
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm text-[#8A9099]">
          Description
        </label>

        {/* Toolbar */}

        <div className="rounded-t-xl border border-[#EEF2F6] bg-[#FAFAFA] px-4 py-3">
          <div className="flex gap-4 text-[#8A9099] text-sm">
            <button type="button">A</button>
            <button type="button">B</button>
            <button type="button">
              <u>U</u>
            </button>
            <button type="button">≡</button>
            <button type="button">☰</button>
            <button type="button">☷</button>
          </div>
        </div>

      <div>
  <label className="mb-2 block text-sm text-[#8A9099]">
    Description
  </label>

  <RichTextEditor
    value={formData.description}
    onChange={(value) =>
      setFormData({
        ...formData,
        description: value,
      })
    }
  />
</div>
      </div>

      {/* Category */}

      <div>
        <label className="mb-2 block text-sm text-[#8A9099]">
          Category
        </label>

        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value,
            })
          }
          className="h-11 w-full rounded-xl border border-[#EEF2F6] px-4 text-sm outline-none"
        >
          <option>Phone</option>
          <option>Watch</option>
          <option>Notebook</option>
        </select>
      </div>

      {/* Price & Discount */}

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="mb-2 block text-sm text-[#8A9099]">
            Price
          </label>

          <div className="flex h-11 items-center rounded-xl border border-[#EEF2F6] px-4">
            <span className="mr-2">$</span>

            <input
              type="text"
              value={formData.price}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: e.target.value,
                })
              }
              className="w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-[#8A9099]">
            Discount
          </label>

          <div className="flex h-11 items-center rounded-xl border border-[#EEF2F6] px-4">
            <span className="mr-2">%</span>

            <input
              type="text"
              value={formData.discount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  discount: e.target.value,
                })
              }
              className="w-full outline-none"
            />
          </div>
        </div>

      </div>

      {/* Upload */}

      {/* Images */}
      <ProductImageUpload
  images={images}
  setImages={setImages}
/>

      {/*<div className="flex gap-3">

        {[1, 2, 3].map((x) => (
          <div
            key={x}
            className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#EEF2F6]"
          >
            <ImageIcon className="text-[#A9B1BA]" size={22} />
          </div>
        ))}

        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E5E7EB]">
          <Trash2 size={20} />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E5E7EB]">
          <img src={Uploading} alt="uploading" size={20} />
        </div>
        
         
      </div>*/}

      <div className="mt-4 flex flex-wrap gap-3">

  {/* Uploaded Images */}
  {images.map((image, index) => (
    <div
      key={index}
      className="relative h-16 w-16 overflow-hidden rounded-xl border border-[#EEF2F6]"
    >
      <img
        src={image.preview}
        alt={`Product ${index + 1}`}
        className="h-full w-full object-cover"
      />

      <button
        type="button"
        onClick={() =>
          setImages((prev) => prev.filter((_, i) => i !== index))
        }
        className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white"
      >
        <X size={12} />
      </button>
    </div>
  ))}

  {/* Empty Placeholders */}
  {Array.from({ length: Math.max(0, 3 - images.length) }).map((_, index) => (
    <div
      key={`placeholder-${index}`}
      className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#EEF2F6]"
    >
      <ImageIcon className="text-[#A9B1BA]" size={22} />
    </div>
  ))}

  {/* Upload Button */}
  <button
    type="button"
    onClick={() => document.getElementById("productImageInput")?.click()}
    className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E5E7EB]"
  >
    <img
      src={Uploading}
      alt="Upload"
      className="h-8 w-8 object-contain"
    />
  </button>

</div>

      {/* Tags */}

      <div>

        <label className="mb-2 block text-sm text-[#8A9099]">
          Tags
        </label>

        <div className="flex min-h-[44px] flex-wrap gap-2 rounded-xl border border-[#EEF2F6] p-2">

          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-1 rounded-lg bg-[#F5F6F8] px-3 py-1 text-sm"
            >
              {tag}

              <button
                type="button"
                onClick={() => removeTag(tag)}
              >
                <X size={14} />
              </button>
            </div>
          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex gap-4 pt-2">

        <button
          type="submit"
          className="h-11 rounded-xl bg-[#22963F] px-8 text-white hover:bg-[#1C8237]"
        >
          Save
        </button>

        <button
          type="button"
          onClick={onClose}
          className="h-11 rounded-xl border border-[#EEF2F6] px-8 hover:bg-[#F8F9FA]"
        >
          Cancel
        </button>

      </div>

    </form>
  );
};

export default ProductForm;