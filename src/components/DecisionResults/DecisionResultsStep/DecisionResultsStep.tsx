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
