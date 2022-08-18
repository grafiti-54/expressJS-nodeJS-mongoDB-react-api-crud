import React from "react";

//passage des props en paramètre
function InputGroup({label, type, name}) {
  return (
    <div className="mb-3">
      <label className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" name={name} />
    </div>
  );
}

export default InputGroup;
