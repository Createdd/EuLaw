import * as React from 'react';
import { StyledForm } from './styles';

import { TextFieldStateType, TextFieldPropsType } from './types';

const placeholder = 'Press ENTER to send!';

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

  /* tslint:disable no-any */
  handleChange = (event: { target: any }) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event: any) => {
    this.props.getValue(this.state.value);
    event.preventDefault();
  }

  onEnterPress = (e: any) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  render() {
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
