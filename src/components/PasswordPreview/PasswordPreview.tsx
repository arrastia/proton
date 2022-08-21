import Form from 'components/Form';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { selectedElementState } from 'stores/PasswordStore';

export const PasswordPreview = () => {
  const password = useRecoilValue(selectedElementState);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="column">
        {password.name}
        <button onClick={() => setIsVisible(true)}>EDIT</button>
      </div>

      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <Form editId={password.id} />
      </Modal>
    </>
  );
};
