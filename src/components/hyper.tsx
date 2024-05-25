const HyperPink = ({children}) => {
  return (
    <div className="hyper h-[150vh]">
      <div className="halftone opacity-10 w-full"></div>
      {children}
    </div>
  );
};

export default HyperPink;
