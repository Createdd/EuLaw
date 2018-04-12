interface TextFieldPropsType {
  getValue: (text: string) => void;
}

interface TextFieldStateType {
  value: string;
}

export {
  TextFieldStateType,
  TextFieldPropsType,
};