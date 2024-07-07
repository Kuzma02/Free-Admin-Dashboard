interface SimpleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleInput: React.FC<SimpleInputProps> = (props) => {
  
  return (
    <input
      {...props}
      className={`bg-blackPrimary text-whiteSecondary w-full h-10 indent-2 outline-none border-gray-700 border focus:border-gray-600 hover:border-gray-600 ${props.className}`}
    />
  );
};
export default SimpleInput;
