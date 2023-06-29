
export const TextInput = ({
  onchange,
  onblur,
  errorField,
  title,
  id,
  name,
  type,
}) => {
  return (
    <div className="sec">
      <label htmlFor={id}>{title}: <span className="danger">*</span></label>
      <input
        className="field"
        type={type}
        id={id}
        name={name}
        onChange={onchange}
        onBlur={onblur}
      />
      {errorField[name] && <p className="danger">{title} is required</p>}
    </div>
  );
}

