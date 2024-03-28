type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col bg-white/[2%] ">
      {children}
    </div>
  );
};

export default Container;
