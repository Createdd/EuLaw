import * as React from 'react';
// import { StyledForm } from './styles';

import { DecisionResultsPropsType, DecisionResultsStateType } from './types';

/* tslint:disable no-any */
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
        <label>
          <input
            name="isMemberState"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            disabled={true}
          />
        </label>
        is a member state
      </form>
    );
  }
}

export { DecisionResults };
