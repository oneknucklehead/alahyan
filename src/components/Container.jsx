import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className=" xl:w-[90%] 2xl:w-[80%] mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
