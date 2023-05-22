import React from "react";
import { useInput } from "../../../custom-hooks/useInput";

export const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="form-login">
      <input placeholder="email" className="inputAuth" name="text" type="email" value={email} onChange={onEmailChange} />
      <input placeholder="password" className="inputAuth" name="text" type="password" value={password} onChange={onPasswordChange} />
      <button type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  )
}
