import "./FormUnit.css";

function FormUnit({ children }) {
  return (
    <div className="form-unit">
      <form className="form-unit__form">{children}</form>
    </div>
  );
}

export default FormUnit;