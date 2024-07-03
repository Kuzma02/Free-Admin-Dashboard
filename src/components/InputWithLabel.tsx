const InputWithLabel = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <label className="text-whiteSecondary block text-base font-semibold mb-1">
        {label}
      </label>
      {children}
    </div>
  );
};
export default InputWithLabel;
