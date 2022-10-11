import "./styles/Search.css";
function InputGroup(props) {
  return (
    <div className={`mb-4 input-custom ${props.error === "" ? "" : "error"}`}>
      <label className="form-label">{props.title}</label>
      <input
        onKeyDown={props.onKeyDown}
        maxLength="60"
        autoComplete="off"
        name={props.name}
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      <div className="form-text">{props.error}</div>
    </div>
  );
}

export default InputGroup;
