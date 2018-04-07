import * as React from 'react';
import { StyledTextField } from './styles';

import { TextFieldStateType } from './types';

/* tslint:disable no-any */
class TextField extends React.Component<any, TextFieldStateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: 'Property Value'
    };
  }

  handleChange = (event: { target: any }) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <StyledTextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export { TextField };
