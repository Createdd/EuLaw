import * as React from 'react';
import { StyledForm } from './styles';

import { TextFieldStateType, TextFieldPropsType } from './types';

const placeholder: string = 'Press ENTER to send!';

class TextField extends React.Component<
  TextFieldPropsType,
  TextFieldStateType
> {
  constructor(props: TextFieldPropsType) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event: React.FormEvent<EventTarget>): void => {
    const target = event.target as HTMLInputElement;
    this.setState({ value: target.value });
  }

  handleSubmit = (event: React.FormEvent<EventTarget>): void => {
    this.props.getValue(this.state.value);
    event.preventDefault();
  }

  onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  render(): JSX.Element {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <textarea
          placeholder={placeholder}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.onEnterPress}
        />
      </StyledForm>
    );
  }
}

export { TextField };
