import "./style.scss";

const GridContainer = ({ children, className }) => {
  return <div className={`grid ${className}`}>{children}</div>;
};

export default GridContainer;
