function SigninForm({ title, para, btn, text, Fields}) {
  const fields = [
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <div className="forms">
      <div className="forms-header">
        <h2>{title}</h2>
        <p className="forms-description">{para}</p>
      </div>

      {Fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            className="forms-input"
          />
        </div>
      ))}

      <button type="submit" className="forms-btn">{btn}</button>
      <p className="forms-acct">{text}</p>
    </div>
  );
}

export default SigninForm;
