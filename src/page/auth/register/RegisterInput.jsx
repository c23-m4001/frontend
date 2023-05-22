import React from "react";
import { useInput } from "../../../custom-hooks/useInput";

export const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="form-register">
      <input placeholder="name" className="inputAuth" name="text" type="text" value={name} onChange={onNameChange} />
      <input placeholder="email" className="inputAuth" name="text" type="email" value={email} onChange={onEmailChange} />
      <input placeholder="password" className="inputAuth" name="text" type="password" value={password} onChange={onPasswordChange} />
      <button type="button" onClick={() => register({ email, password })}>Register</button>
    </form>
  )
}
