import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ color }) => color || 'white'};
  font-weight: ${({ weight }) => weight || 900};
  text-align: ${({ align }) => align || 'center'};
`;

export default Title;
