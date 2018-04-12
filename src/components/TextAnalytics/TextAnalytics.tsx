import * as React from 'react';

import {
    TextAnalyticsPropsType,
    TextAnalyticsStateType,
} from './types';
import TextAnalyticsStyled from './styles';

class TextAnalytics extends React.Component<
  TextAnalyticsPropsType,
  TextAnalyticsStateType
> {
  constructor(props: TextAnalyticsPropsType) {
    super(props);
    this.state = {
      stateItem: true,
    };
  }

  render() {
    return (
        <TextAnalyticsStyled>
            <p>TextAnalytics</p>
            {this.props.text}
        </TextAnalyticsStyled>
    );
  }
}

export { TextAnalytics as default };