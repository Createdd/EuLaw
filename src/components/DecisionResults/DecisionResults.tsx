import * as React from 'react';
import { intersection as _intersection, includes as _includes } from 'lodash';

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

  addRow = (rows: JSX.Element[], item: string, success: boolean) => {
    rows.push(
      <DecisionResultsStep
        key={`${item}key`}
        results={this.props.results}
        success={success}
        type={item}
      />
    );
  }

  renderDecisionSteps = (results: TextAnalyticsStateType): JSX.Element => {
    const rows: JSX.Element[] = [];
    for (const item in this.props.results) {
      if (item.length !== 0 && item === 'memberState') {
        const intersect: string[] = _intersection(
          MemberStates.map((str: string) => str.toLowerCase()),
          results.memberState
        );
        if (intersect.length > 0) {
          this.addRow(rows, item, true);
          continue;
        } else {
          this.addRow(rows, item, false);
          continue;
        }
      } else if (item.length !== 0 && item === 'euTopic') {
        if (_includes(results.euTopic, 'eu')) {
          this.addRow(rows, item, true);
          continue;
        } else {
          this.addRow(rows, item, false);
          continue;
        }
      }
    }
    return <>{rows}</>;
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
