import * as React from 'react';
import { StyledForm } from './styles';

import { TextFieldStateType } from './types';

const placeholder = 'Press ENTER to send!';

/* tslint:disable no-any */
class TextField extends React.Component<any, TextFieldStateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: any }) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert('submitted: ' + this.state.value);
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
