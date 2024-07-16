// *********************
// Role of the component: Select input component that displays the select input field
// Name of the component: SelectInput.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <InputWithLabel label="Select role"><SelectInput selectList={roles} /></InputWithLabel>
// Input parameters: roles: { value: string; label: string }[]
// Output: SelectInput component that displays the select input field
// *********************

import { nanoid } from "nanoid";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  selectList: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const SelectInput: React.FC<TextAreaProps> = (props) => {  
  return (
    <select value={props.value} onChange={props.onChange} className="w-full h-10 dark:bg-blackPrimary bg-white border border-gray-600 dark:text-whiteSecondary text-blackPrimary outline-0 pl-3 pr-8 cursor-pointer dark:hover:border-gray-500 hover:border-gray-400">
      {props?.selectList &&
        props?.selectList.map((item: { value: string; label: string }) => {
          const { value, label } = item;

          return <option key={nanoid()} value={value}>{label}</option>;
        })}
    </select>
  );
};
export default SelectInput;
