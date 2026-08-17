import FileGrid from "./FileGrid";

const FileSection = () => {
  return (
    <section className="mt-12">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2
            className="
              text-[28px]
              font-medium
              text-[#37393D]
            "
          >
            Files
          </h2>
        </div>
      </div>

      {/* Grid */}

      <FileGrid />

    </section>
  );
};

export default FileSection;