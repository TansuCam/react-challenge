function InputGroup() {
  return (
    <div className="mb-3">
      <label htmlFor="" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id=""
        aria-describedby="emailHelp"
      />
      <div className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  );
}

export default InputGroup;
