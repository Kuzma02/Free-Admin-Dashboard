// *********************
// Role of the component: Text area input component that displays the text area input field
// Name of the component: TextAreaInput.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <InputWithLabel label="Category description"><TextAreaInput placeholder="Enter a category description..." rows={4} cols={50} /></InputWithLabel>
// Input parameters: { rows?: number; cols?: number; placeholder?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }
// Output: TextAreaInput component that displays the text area input field
// *********************

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  cols?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className="dark:bg-blackPrimary bg-white dark:text-whiteSecondary text-blackPrimary w-full h-40 indent-2 outline-none border-gray-700 border dark:focus:border-gray-600 focus:border-gray-400 dark:hover:border-gray-600 hover:border-gray-400 py-2"
    ></textarea>
  );
};
export default TextAreaInput;
