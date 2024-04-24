import PropTypes from "prop-types";

const JobBox = ({ job }) => {
  const colorArr = ["#A3CBD7", "#FF967C", "#5D8DE2", "#091036"];
  const selectColor = () => {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(colorArr.length);
    const color =
      colorArr[
        Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
      ];
    console.log(color);
    return color;
  };

  return (
    <div className="w-full shadow-md relative ring-1 ring-black ring-opacity-10 rounded-lg p-4 md:p-4 cursor-pointer hover:bg-[#f7f7f7]">
      <div
        className={`h-full w-2 rounded-s-lg bg-[${selectColor()}] absolute left-0 top-0`}
      ></div>
      <p className="text-sm md:text-base font-semibold">{job}</p>
    </div>
  );
};
JobBox.propTypes = {
  job: PropTypes.string,
};
export default JobBox;
