const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-background/20 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap;">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-3xl text-2xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
