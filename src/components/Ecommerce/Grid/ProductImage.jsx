const ProductImage = ({ image }) => {
  return (
    <div className="flex h-[300px] w-[247px] items-center justify-center px-8">
      <img
        src={image}
        alt=""
        className="max-h-[200px] object-contain"
      />
    </div>
  );
};

export default ProductImage;