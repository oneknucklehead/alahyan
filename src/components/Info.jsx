import PropTypes from "prop-types";

const Info = ({
  text = "Let’s get started",
  sym = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM0 4.5H10V3.5H0V4.5Z"
        fill="white"
      />
    </svg>
  ),
}) => {
  return (
    <div className="bg-white rounded-full flex gap-2 justify-between items-center p-2">
      <div className="break-all md:break-words text-sm xl:text-[1vw] 2xl:text-[0.9vw] font-semibold ml-4">
        {text}
      </div>
      <div className="bg-[#091036] flex justify-center items-center text-white p-3 rounded-full">
        {sym}
      </div>
    </div>
  );
};

Info.propTypes = {
  text: PropTypes.string,
  sym: PropTypes.any,
};

export default Info;
