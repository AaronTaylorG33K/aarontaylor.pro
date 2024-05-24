const HyperPink = ({ pathname }: { pathname?: string }) => {
  if (pathname !== "/") return null;
  return (
    <div className="hyper h-full z-10">
      <div className="halftone opacity-10 z-50 h-full w-full"></div>
    </div>
  );
};

export default HyperPink;
