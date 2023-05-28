export const FormField = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  title,
}) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
    </div>
  );
};
