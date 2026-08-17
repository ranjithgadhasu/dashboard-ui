const PageTitle = ({
  title,
  subtitle,
}) => {
  return (
    <div>

      <h1
        className="
          text-[34px]
          font-semibold
          text-[#37393D]
        "
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className="
            mt-2
            text-[15px]
            text-[#98A2B3]
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default PageTitle;