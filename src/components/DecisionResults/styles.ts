import styled from 'styled-components';

const StyledDecisionStepSuccess = styled.li`
  color: green;
`;

const StyledDecisionStepFail = styled.li`
  color: red;
`;

const StyledForm = styled.form`
  border: 0.1rem solid black;

  ul {
    list-style-type: none;
  }
`;

export { StyledForm, StyledDecisionStepSuccess, StyledDecisionStepFail };
