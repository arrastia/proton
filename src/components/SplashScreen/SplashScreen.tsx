import { Styles } from './SplashScreen.styles';

import { loading } from 'assets/images';

export const SplashScreen = () => {
  return (
    <Styles.SplashScreen>
      <Styles.LoadingLogo alt="" src={loading} />
      <Styles.LoadingText>Loading Proton passwords...</Styles.LoadingText>
    </Styles.SplashScreen>
  );
};
