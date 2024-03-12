import NoDataFound from "./NoDataFound";

const NoProductFound = () => {
  return (
    <div className="min-h-dvh">
      <NoDataFound>
        <h3 className="text-2xl text-center font-semibold text-white">
          No product found
        </h3>
      </NoDataFound>
    </div>
  );
};

export default NoProductFound;
