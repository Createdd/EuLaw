import * as React from 'react';
import { isEqual as _isEqual } from 'lodash';
var nlp = require('compromise');

import { TextAnalyticsPropsType, TextAnalyticsStateType } from './types';
import TextAnalyticsStyled from './styles';

import ExampleCase from '../../data/exampleData/exampleCase';

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

  resultsHandler = (): void => {
    // const intersect: string[] = _intersection(
    //   MemberStates.map((str: string) => str.toLowerCase()),
    //   this.state.places
    // );
    // const newRes: TextAnalyticsStateType = {
    //   this.state
    // };

    this.props.results(this.state);
  }

  renderResults = (): JSX.Element => {
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

  static getDerivedStateFromProps(
    nextProps: TextAnalyticsPropsType,
    prevState: TextAnalyticsStateType
  ) {
    // const text = nlp(nextProps.text); // TODO: Use input instead of example
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

    // If a new text is supplied, update the state
    if (!_isEqual(prevState, { topics, places })) {
      return {
        topics,
        places
      };
    }

    return null;
  }

  componentDidUpdate(): void {
    this.resultsHandler();
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
