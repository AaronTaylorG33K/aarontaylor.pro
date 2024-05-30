const HyperPink = ({children}:{children: React.ReactNode}) => {
  return (
    <div id="hyper" className="hyper h-[150vh] lg:h-[400vh] overflow-y-scroll">
      <div id="halftone" className="halftone  w-full h-full border-t-[30px] border border-black"></div>
      {children}
    </div>
  );
};

export default HyperPink;
