import styled from 'styled-components';

const StyledDecisionStepSuccess = styled.li`
  color: green;
`;

const StyledDecisionStepFail = styled.li`
  color: red;
`;

const StyledForm = styled.form`
  color: blue;
  border: 0.1rem solid black;
  list-style-position: inside;
`;

export { StyledForm, StyledDecisionStepSuccess, StyledDecisionStepFail };
