import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: purple;
  padding: 8px;
  &:active {
  color: red;
  }
`;
