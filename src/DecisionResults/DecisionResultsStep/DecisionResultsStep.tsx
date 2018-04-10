import * as React from 'react';

import {
  DecisionResultsStepPropsType,
  DecisionResultsStepStateType
} from './types';
import DecisionResultsStepStyled from './styles';

class DecisionResultsStep extends React.Component<
  DecisionResultsStepPropsType,
  DecisionResultsStepStateType
> {
  constructor(props: DecisionResultsStepPropsType) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  /* tslint:disable no-any */
  handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <DecisionResultsStepStyled>
        <label>
          <input
            name="isMemberState"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            disabled={true}
          />
          is a member state
        </label>
      </DecisionResultsStepStyled>
    );
  }
}

export { DecisionResultsStep as default };
