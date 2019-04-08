import React, { FunctionComponent, useState } from "react";
import InputGroup from "../common/InputGroup";

interface State {
  input?: string;
}

const handleChange = (set: Function) => (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  set(e.target.value);
};

const Login: FunctionComponent<State> = ({ input = "" }) => {
  const [email, set] = useState(input);
  return <InputGroup onChange={handleChange(set)} />;
};

export default Login;
