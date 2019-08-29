import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import theme from './theme';

const useMobileMediaQuery = () =>
  useMediaQuery(theme.spacing.mediaQuery.mobile, {
    defaultMatches: window.matchMedia(theme.spacing.mediaQuery.mobile).matches,
  });

export default useMobileMediaQuery;
