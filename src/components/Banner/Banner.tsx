import { Styles } from './Banner.styles';

import { Button } from 'atoms/Button';

import type { BannerProps } from './@types/Banner.types';

export const Banner = ({ message, title, url }: BannerProps) => {
  const handleChangePasswordOnWebsite = () => (window.location.href = url);

  return (
    <Styles.Banner>
      <h3>⚠️ {title}</h3>
      <p>{message}</p>
      <Button appearance="default" onClick={handleChangePasswordOnWebsite}>
        Change password on website
      </Button>
    </Styles.Banner>
  );
};
