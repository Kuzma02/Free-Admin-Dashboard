const Welcome = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-y-4 py-7">{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-whiteSecondary text-3xl font-bold">{children}</h3>;
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-xl text-whiteSecondary">{children}</p>;
};

const ActionButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return <button onClick={onClick} className="bg-whiteSecondary text-blackPrimary w-60 py-3 font-semibold text-lg hover:bg-white duration-200">
    {children}
  </button>;
};

Welcome.Title = Title;
Welcome.Description = Description;
Welcome.ActionButton = ActionButton;

export default Welcome;
