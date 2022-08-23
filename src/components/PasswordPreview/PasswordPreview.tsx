import { Button } from 'atoms/Button/Button';
import Divider from 'components/Divider';
import Form from 'components/Form';
import { Modal } from 'components/Modal';
import { PasswordThumbnail } from 'components/PasswordThumbnail';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { selectedElementState } from 'stores/PasswordStore';
import { Styles } from './PasswordPreview.styles';

export const PasswordPreview = () => {
  const password = useRecoilValue(selectedElementState);

  const [isVisible, setIsVisible] = useState(false);

  const renderThumbnailActionButtons = () => <Button onClick={() => setIsVisible(true)}>EDIT</Button>;

  return (
    <>
      <Styles.Container>
        <PasswordThumbnail lastModifiedAt={password.lastModifiedAt} name={password.name} actionButtons={renderThumbnailActionButtons()} />
        <Divider />
        <div className="column">
          username: {password.username}
          password: {password.value}
        </div>
        <Divider />
        websites:
      </Styles.Container>

      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <Form editId={password.id} onSave={() => setIsVisible(false)} />
      </Modal>
    </>
  );
};
