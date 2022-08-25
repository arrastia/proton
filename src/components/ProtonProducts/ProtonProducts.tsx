import { Styles } from './ProtonProducts.styles';

import { calendar, drive, mail, vpn } from 'assets/images';

import { Link } from 'atoms/Link';

export const ProtonProducts = () => {
  return (
    <Styles.Products>
      <Link href="https://proton.me/mail" target="_blank" title="Proton Mail">
        <Styles.Product alt="Mail logo" src={mail} />
      </Link>
      <Link href="https://proton.me/calendar" target="_blank" title="Proton Calendar">
        <Styles.Product alt="Calendar logo" src={calendar} />
      </Link>
      <Link href="https://proton.me/drive" target="_blank" title="Proton Drive">
        <Styles.Product alt="Drive logo" src={drive} />
      </Link>
      <Link href="https://protonvpn.com" target="_blank" title="Proton VPN">
        <Styles.Product alt="VPN logo" src={vpn} />
      </Link>
    </Styles.Products>
  );
};
