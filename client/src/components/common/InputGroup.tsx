import React from "react";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FunctionComponent<Props> = props => {
  return <input onChange={props.onChange} />;
};

export default InputGroup;
