import "./style.scss";

interface Props {
  children: React.ReactNode;
  className: string
}

const GridContainer: React.FC<Props> = ({ children, className }) => {
  return <div className={`grid ${className}`}>{children}</div>;
};

export default GridContainer;
