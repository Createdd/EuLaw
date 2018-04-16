import * as React from 'react';

// import { StyledForm } from './styles';
import { DecisionResultsPropsType, DecisionResultsStateType } from './types';

import DecisionResultsStep from './DecisionResultsStep';

class DecisionResults extends React.Component<
  DecisionResultsPropsType,
  DecisionResultsStateType
> {
  constructor(props: DecisionResultsPropsType) {
    super(props);
    this.state = {
    
    };
  }

  /* tslint:disable no-any */
  handleInputChange = (event: React.FormEvent<EventTarget>): void => {
    const target = event.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(): JSX.Element {
    return (
      <form>
        <DecisionResultsStep/>
      </form>
    );
  }
}

export { DecisionResults };
