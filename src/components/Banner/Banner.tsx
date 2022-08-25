import { Button } from 'atoms/Button';
import { Styles } from './Banner.styles';

interface BannerProps {
  message: string;
  title: string;
  url: string;
}

export const Banner = ({ message, title, url }: BannerProps) => {
  const handleChangePasswordOnWebsite = () => (window.location.href = url);

  return (
    <Styles.Banner>
      <h3>⚠️ {title}</h3>
      <p>{message}</p>
      <Button appearance="secondary" onClick={handleChangePasswordOnWebsite}>
        Change password on website
      </Button>
    </Styles.Banner>
  );
};
