import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 50px;
`;

export const Btn = styled.View`
  background-color: var(--secondary);
  align-items: center;
  align-self: center;
  width: 90%;
  padding: 18px 50px;
  border-radius: 8px;
`;

export const Text = styled.Text`
  font-size: ${props => `${props.fontSize}px`};
  font-weight: 500;
  color: #FFF;
`;