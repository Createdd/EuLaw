import * as React from 'react';
import { intersection as _intersection, isEqual as _isEqual } from 'lodash';
var nlp = require('compromise');

import { TextAnalyticsPropsType, TextAnalyticsStateType } from './types';
import TextAnalyticsStyled from './styles';

import ExampleCase from '../../data/exampleData/exampleCase';
import MemberStates from '../../data/exampleData/memberStates';

class TextAnalytics extends React.Component<
  TextAnalyticsPropsType,
  TextAnalyticsStateType
> {
  constructor(props: TextAnalyticsPropsType) {
    super(props);
    this.state = {
      topics: [],
      places: []
    };
  }

  componentDidMount() {
    this.calculateResults();
  }

  resultsHandler = (res: TextAnalyticsStateType) => {
    this.props.results(res);
  }

  calculateResults = () => {
    // const text = nlp(this.props.text); // TODO: Use input instead of example
    const text = nlp(ExampleCase.text);
    const topics = text
      .topics()
      .slice(0, 4)
      .out('frequency')
      .map((top: { normal: string }) => top.normal.toLowerCase());
    const places = text
      .nouns()
      .places()
      .slice(0, 4)
      .out('frequency')
      .map((pl: { normal: string }) => pl.normal.toLowerCase());

    if (!_isEqual(this.state, { topics, places })) {
      this.setState({
        topics,
        places
      });
    }

    const intersect = _intersection(
      MemberStates.map((str: string) => str.toLowerCase()),
      places
    );

    const newRes = {
      topics: [],
      places: intersect
    };

    this.resultsHandler(newRes);
  }

  renderResults = () => {
    this.calculateResults();
    return (
      <ul>
        <li>
          Topics:
          {this.state.topics.map((top: string) => `${top.toUpperCase()}, `)}
        </li>
        <li>
          States:
          {this.state.places.map((pl: string) => `${pl.toUpperCase()}, `)}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <TextAnalyticsStyled>
        <p>TextAnalytics</p>
        {this.renderResults()}
      </TextAnalyticsStyled>
    );
  }
}

export { TextAnalytics as default };
