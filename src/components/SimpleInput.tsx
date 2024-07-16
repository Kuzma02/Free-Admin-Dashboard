// *********************
// Role of the component: Simple input component that displays the input field
// Name of the component: SimpleInput.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <InputWithLabel label="Confirm password"><SimpleInput type="password" placeholder="Enter a confirm password..." /></InputWithLabel>
// Input parameters: roles: no input parameters
// Output: SimpleInput component that displays the input field
// *********************

interface SimpleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleInput: React.FC<SimpleInputProps> = (props) => {
  return (
    <input
      {...props}
      className={`dark:bg-blackPrimary bg-white dark:text-whiteSecondary text-blackPrimary w-full h-10 indent-2 outline-none border-gray-700 border dark:focus:border-gray-600 focus:border-gray-400 dark:hover:border-gray-600 hover:border-gray-400 ${props.className}`}
    />
  );
};
export default SimpleInput;
