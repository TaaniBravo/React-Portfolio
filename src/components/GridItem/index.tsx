interface Props {
  children: React.ReactNode;
  id: string
}

const GridItem: React.FC<Props> = ({ id, children }) => {
  return (
    <div className="grid__item" id={id}>
      {children}
    </div>
  );
};

export default GridItem;
