const HyperPink = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="hyper h-[130vh]">
      <div className="halftone opacity-10 w-full h-full"></div>
      {children}
    </div>
  );
};

export default HyperPink;
