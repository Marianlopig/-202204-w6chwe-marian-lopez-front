import { useEffect, useState } from "react";

const LoginForm = () => {
  const blankData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankData);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "")
      setButtonDisabled(false);
    else {
      setButtonDisabled(true);
    }
  }, [formData]);
  const resetForm = () => {
    setFormData(blankData);
  };

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    resetForm();
  };

  return (
    <form autoComplete="off" noValidate onSubmit={submitLogin}>
      <label htmlFor="username" />
      <input id="username" value={formData.username} onChange={changeData} />
      <label htmlFor="password" />
      <input id="password" type="password" value={formData.password} />
      <button disabled={buttonDisabled}>LOG IN</button>
    </form>
  );
};
export default LoginForm;
