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
      className="bg-blackPrimary text-whiteSecondary w-full h-40 indent-2 outline-none border-gray-700 border focus:border-gray-600 hover:border-gray-600 py-2"
    ></textarea>
  );
};
export default TextAreaInput;
