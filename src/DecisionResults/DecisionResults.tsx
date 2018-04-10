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
      isGoing: true,
      numberOfGuests: 2
    };
  }

  /* tslint:disable no-any */
  handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <DecisionResultsStep/>
      </form>
    );
  }
}

export { DecisionResults };
