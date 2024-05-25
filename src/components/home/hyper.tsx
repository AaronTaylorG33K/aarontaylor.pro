const HyperPink = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="hyper h-[200vh] ">
      <div className="halftone  w-full h-full border-t-[30px] border border-black"></div>
      {children}
    </div>
  );
};

export default HyperPink;
