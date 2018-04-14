import * as React from 'react';
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
      stateItem: true
    };
  }

  renderTopics = () => {
    // const doc = nlp(this.props.text);
    const text = nlp(ExampleCase.text);
    const topics = text
      .topics()
      .slice(0, 4)
      .out('frequency');
    const places = text
      .nouns()
      .places()
      .slice(0, 4)
      .out('frequency');

    console.log(places);

    return (
      <ul>
        <li>
          Topics:
          {topics.map(
            (topic: { normal: string }) => `${topic.normal.toUpperCase()}, `
          )}
        </li>
        <li>
          States:
          {places.map(
            (topic: { normal: string }) => `${topic.normal.toUpperCase()}, `
          )}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <TextAnalyticsStyled>
        <p>TextAnalytics</p>
        {this.renderTopics()}
      </TextAnalyticsStyled>
    );
  }
}

export { TextAnalytics as default };
