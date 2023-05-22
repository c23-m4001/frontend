import React, { useState } from "react";
import { AuthApi } from '../../../api/auth/authApi';
import { useAuth } from '../../../core/Auth/AuthProvider';
import { useInput } from "../../../custom-hooks/useInput";

export const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [domainErrors, setDomainErrors] = useState({});
  const { currentUser,setToken } = useAuth();

  console.log("CURRE", currentUser)

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const a = await AuthApi.emailLogin({ email, password }).
    catch((er) => {
      setDomainErrors(er.response.data.errors.reduce((prev, err) => {
        prev[err.domain] = err.message
        return prev
      }, {}))
    })

    setToken(a.data.token.access_token)
  }


  return (
    <form className="form-login" onSubmit={onSubmit}>
      <input placeholder="email" className="inputAuth" name="text" type="email" value={email} onChange={onEmailChange} />
      {domainErrors?.email && <div>
        error: {domainErrors?.email}</div>}
      <input placeholder="password" className="inputAuth" name="text" type="password" value={password} onChange={onPasswordChange} />
      {domainErrors?.password && <div>
        error: {domainErrors?.password}</div>}
      <button type="submit">Login</button>
    </form>
  )
}
