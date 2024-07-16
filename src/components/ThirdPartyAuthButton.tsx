// *********************
// Role of the component: Third party authentication button component that displays the third party authentication button
// Name of the component: ThirdPartyAuthButton.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ThirdPartyAuthButton><FaGoogle className="text-2xl max-sm:text-xl" /></ThirdPartyAuthButton>
// Input parameters: no input parameters
// Output: ThirdPartyAuthButton component that displays the third party authentication button
// *********************

const ThirdPartyAuthButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="dark:bg-blackPrimary bg-gray-100 hover:bg-whiteSecondary dark:hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors w-44 h-12 flex justify-center items-center max-sm:w-32 max-sm:h-10 dark:text-whiteSecondary text-blackPrimary">
      {children}
    </button>
  );
};
export default ThirdPartyAuthButton;
