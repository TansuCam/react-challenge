import "./styles/Search.css";
function InputGroup(props) {
  return (
    <div className={`mb-4 input-custom ${props.error === "" ? "" : "error"}`}>
      <label className="form-label">{props.title}</label>
      <input
        autoComplete="off"
        name={props.name}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        onBlur={props.onBlur}
      />
      <div className="form-text">{props.error}</div>
    </div>
  );
}

export default InputGroup;
