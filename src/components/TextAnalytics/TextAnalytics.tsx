import * as React from 'react';
var nlp = require('compromise');

import { TextAnalyticsPropsType, TextAnalyticsStateType } from './types';
import TextAnalyticsStyled from './styles';

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
    const doc = nlp(this.props.text);
    const topics = doc
      .topics()
      .slice(0, 4)
      .out('frequency');

    return (
      <p>
        Topics (according to word importance):
        {topics.map(
          (topic: { normal: string }) => `${topic.normal.toUpperCase()}, `
        )}
      </p>
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
