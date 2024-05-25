const HyperPink = ({children}:{children: React.ReactNode}) => {
  return (
    <div id="hyper" className="hyper h-[200vh] ">
      <div id="halftone" className="halftone  w-full h-full border-t-[30px] border border-black"></div>
      {children}
    </div>
  );
};

export default HyperPink;
