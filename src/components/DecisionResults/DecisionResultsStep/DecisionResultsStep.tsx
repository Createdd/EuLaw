import * as React from 'react';

import {
  DecisionResultsStepPropsType,
  DecisionResultsStepStateType
} from './types';
import {
  DecisionResultsStepStyled,
  StyledDecisionStepSuccess,
  StyledDecisionStepFail
} from './styles';

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

  renderResult = ( type: string ): JSX.Element => {
    if (this.props.success) {
      return (
        <StyledDecisionStepSuccess>
          <label>Is a {type}</label>
          <input
            name={type}
            type="checkbox"
            checked={true}
            disabled={true}
          />
        </StyledDecisionStepSuccess>
      );
    }
    return (
      <StyledDecisionStepFail>
        <label>Is not a {type} </label>
        <input
          name={type}
          type="checkbox"
          checked={false}
          disabled={true}
        />
      </StyledDecisionStepFail>
    );
  }

  render() {
    return(
      <DecisionResultsStepStyled>
       {this.renderResult( this.props.type)}
      </DecisionResultsStepStyled>
    );
  }
}

export { DecisionResultsStep as default };
