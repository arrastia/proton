import { Fragment, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { Styles } from './PasswordPreview.styles';

import { Button } from 'atoms/Button/Button';
import { Modal } from 'components/Modal';
import { PasswordThumbnail } from 'components/PasswordThumbnail';
import { Divider } from 'components/Divider';
import Form from 'components/Form';

import { selectedElementState } from 'stores/PasswordStore';
import { Banner } from 'components/Banner';

export const PasswordPreview = () => {
  const password = useRecoilValue(selectedElementState);

  const [isVisible, setIsVisible] = useState(false);

  const handleCloseModal = () => setIsVisible(false);

  const renderThumbnailActionButtons = () => <Button onClick={() => setIsVisible(true)}>EDIT</Button>;

  const renderBanner = () => {
    if (true) {
      return (
        <Fragment>
          <Banner
            message={`You are reusing the password of ${password.url} which increases the risk to this account if your "${password.url}" account is compromised`}
            title="Reused password"
            url={password.url?.[0].link}
          />
          <Divider />
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      <Styles.Container>
        <PasswordThumbnail actionButtons={renderThumbnailActionButtons()} lastModifiedAt={password.lastModifiedAt} name={password.name} />
        <Divider />
        {renderBanner()}
        <Styles.Group>
          <span>
            <strong>Username:</strong> {password.username}
          </span>
          <span>
            <strong>Password:</strong> {password.value}
          </span>
        </Styles.Group>
        <Divider />
        websites:
      </Styles.Container>

      <Modal isVisible={isVisible} onClose={handleCloseModal}>
        <Form editId={password.id} onCancel={handleCloseModal} />
      </Modal>
    </Fragment>
  );
};
