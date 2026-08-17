const PageContent = ({ children }) => {
  return (
    <main className="flex-1 bg-[#F8F9FC] p-6 overflow-y-auto">
      {children}
    </main>
  );
};

export default PageContent;