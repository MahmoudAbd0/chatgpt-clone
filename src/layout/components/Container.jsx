function Container({ children }) {
  return (
    <div className=" container mx-auto  w-1/2 flex flex-col justify-center align-middle h-screen">
      {children}
    </div>
  );
}

export default Container;
