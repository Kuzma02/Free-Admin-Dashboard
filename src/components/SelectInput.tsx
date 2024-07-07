import { nanoid } from "nanoid";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  selectList: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const SelectInput: React.FC<TextAreaProps> = (props) => {  
  return (
    <select value={props.value} onChange={props.onChange} className="w-full h-10 bg-blackPrimary border border-gray-600 text-whiteSecondary outline-0 pl-3 pr-8 cursor-pointer hover:border-gray-500">
      {props?.selectList &&
        props?.selectList.map((item: { value: string; label: string }) => {
          const { value, label } = item;

          return <option key={nanoid()} value={value}>{label}</option>;
        })}
    </select>
  );
};
export default SelectInput;
