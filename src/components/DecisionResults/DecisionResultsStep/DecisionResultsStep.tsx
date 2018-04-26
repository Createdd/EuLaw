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
      checked: false
    };
  }

  // copied from React Docs
  handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    // const target = event.target as HTMLInputElement;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    this.setState({
      checked: true
    });
  }

  render() {
    return (
      <DecisionResultsStepStyled>
        <label>
          <input
            name="isMemberState"
            type="checkbox"
            checked={true}
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
