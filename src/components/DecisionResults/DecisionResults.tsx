import * as React from 'react';
import { intersection as _intersection } from 'lodash';

import { StyledForm } from './styles';
import { DecisionResultsPropsType, DecisionResultsStateType } from './types';

import { TextAnalyticsStateType } from '../TextAnalytics';
import DecisionResultsStep from './DecisionResultsStep';

import MemberStates from '../../data/exampleData/memberStates';

class DecisionResults extends React.Component<
  DecisionResultsPropsType,
  DecisionResultsStateType
> {
  constructor(props: DecisionResultsPropsType) {
    super(props);
  }

  renderDecisionSteps = (results: TextAnalyticsStateType): JSX.Element => {
    if (results.places.length !== 0) {
      const intersect: string[] = _intersection(
        MemberStates.map((str: string) => str.toLowerCase()),
        results.places
      );
      if (intersect.length > 1) {
        return (
          <DecisionResultsStep results={this.props.results} success={true} type="member state"/>
        );
      } else {
        return (
          <DecisionResultsStep results={this.props.results} success={false} type="member state"/>
        );
      }
    }
    return <DecisionResultsStep results={this.props.results} success={false} type="not specified" />;
  }

  render() {
    return (
      <StyledForm>
        <h2>Decision Results</h2>
        <ul>{this.renderDecisionSteps(this.props.results)}</ul>
      </StyledForm>
    );
  }
}

export { DecisionResults };
