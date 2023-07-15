import "./FormUnit.css";

function FormUnit({ children }) {
  return (
    <div className="form-unit">
      <form className="form-unit__form" noValidate>{children}</form>
    </div>
  );
}

export default FormUnit;