import { ThemeConfig, extendTheme } from '@chakra-ui/react';

// import custom components
import components from './components';

// import colors, typography, etc.
import foundations from './foundations';

// import global styles
import styles from './styles';

// set base theme config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const overrides = {
  styles,
  ...foundations,
  components,
};

export const theme = extendTheme(overrides);
