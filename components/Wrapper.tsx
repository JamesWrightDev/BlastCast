import styled from 'styled-components/native';
import { View } from 'react-native';

const Wrapper = styled(View)`
  background-color: ${props => props.theme.colors.main};
  height: 100%;
  padding: ${props => props.theme.spacing.small};
`

export default Wrapper;