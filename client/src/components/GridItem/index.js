const GridItem = ({ id, children }) => {
  return (
    <div className="grid__item" id={id}>
      {children}
    </div>
  );
};

export default GridItem;
