import * as React from 'react';
import { isEqual as _isEqual } from 'lodash';
var nlp = require('compromise');

import { TextAnalyticsPropsType, TextAnalyticsStateType } from './types';
import TextAnalyticsStyled from './styles';

// import ExampleCase from '../../data/exampleData/exampleCase';

class TextAnalytics extends React.Component<
  TextAnalyticsPropsType,
  TextAnalyticsStateType
> {
  constructor(props: TextAnalyticsPropsType) {
    super(props);
    this.state = {
      euTopic: [],
      memberState: []
    };
  }

  resultsHandler = (): void => {
    // const intersect: string[] = _intersection(
    //   MemberStates.map((str: string) => str.toLowerCase()),
    //   this.state.memberState
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
          euTopic:
          {this.state.euTopic.map((top: string) => ` ${top.toUpperCase()}, `)}
        </li>
        <li>
          States:
          {this.state.memberState.map((pl: string) => ` ${pl.toUpperCase()}, `)}
        </li>
      </ul>
    );
  }

  static getDerivedStateFromProps(
    nextProps: TextAnalyticsPropsType,
    prevState: TextAnalyticsStateType
  ) {
    const text = nlp(nextProps.text); // TODO: Use input instead of example
    // const text = nlp(ExampleCase.text);
    const euTopic = text
      .topics()
      .slice(0, 4)
      .out('frequency')
      .map((top: { normal: string }) => top.normal.toLowerCase());
    const memberState = text
      .nouns()
      .places()
      .slice(0, 4)
      .out('frequency')
      .map((pl: { normal: string }) => pl.normal.toLowerCase());
    const product = text
      .match('import ban for any? #Noun from')
      .terms()
      .nouns()
      .tag('possesive')
      .out('array')
      .splice(-1);

    console.log(product);

    // If a new text is supplied, update the state
    if (!_isEqual(prevState, { euTopic, memberState })) {
      return {
        euTopic,
        memberState
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
