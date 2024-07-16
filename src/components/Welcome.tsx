// *********************
// Role of the component: Welcome component that displays the welcome message with the title, description, and action button
// Name of the component: Welcome.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call:
{
  /* <Welcome>
  <Welcome.Title>Good evening, Sherwood 😀</Welcome.Title>
  <Welcome.Description>
    Here is the complete overview of your eCommerce store. Analyze the
    statistics and make smart decisions.
  </Welcome.Description>
  <Welcome.ActionButton onClick={() => console.log("Analyzing...")}>
    Analyze the statistics
  </Welcome.ActionButton>
</Welcome>; */
}
// Input parameters: Welcome.Title, Welcome.Description, Welcome.ActionButton
// Output: Welcome component that displays the welcome message with the title, description, and action button
// *********************

const Welcome = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-y-4 py-7">{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="dark:text-whiteSecondary text-blackPrimary text-3xl font-bold">
      {children}
    </h3>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-xl dark:text-whiteSecondary text-blackPrimary">
      {children}
    </p>
  );
};

const ActionButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="dark:bg-whiteSecondary bg-blackPrimary dark:text-blackPrimary text-whiteSecondary w-60 py-3 font-semibold text-lg dark:hover:bg-white hover:bg-black duration-200"
    >
      {children}
    </button>
  );
};

Welcome.Title = Title;
Welcome.Description = Description;
Welcome.ActionButton = ActionButton;

export default Welcome;
