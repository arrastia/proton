import type { Password } from 'models';
import { Styles } from './PasswordThumbnail.styles';

type PasswordThumbnailProps = Pick<Password, 'lastModifiedAt' | 'thumbnail' | 'name'> & {
  actionButtons?: JSX.Element;
};

export const PasswordThumbnail = ({ actionButtons, lastModifiedAt, name, thumbnail }: PasswordThumbnailProps) => {
  return (
    <Styles.Container>
      <Styles.Container>
        <Styles.Thumbnail />
        <div>
          <h1>{name}</h1>
          <p>{lastModifiedAt}</p>
        </div>
      </Styles.Container>
      {actionButtons || null}
    </Styles.Container>
  );
};
