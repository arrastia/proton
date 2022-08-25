import { useRecoilValue, useSetRecoilState } from 'recoil';

import { List } from 'atoms/List';
import { PasswordThumbnail } from 'components/PasswordThumbnail';
import ListItem from 'atoms/ListItem';

import { isSelectedState, selectedPasswordIdState } from 'stores/PasswordStore';

type Props = {
  id: string;
  lastModifiedAt: number;
  name: string;
  username: string;
};

export const PassList = ({ name, username, id, lastModifiedAt }: Props) => {
  const isSelected = useRecoilValue(isSelectedState(id));

  const setSelectedPassword = useSetRecoilState(selectedPasswordIdState);

  return (
    <List id={id}>
      <ListItem isSelected={isSelected} onClick={() => setSelectedPassword(id)}>
        <PasswordThumbnail lastModifiedAt={lastModifiedAt} name={name} />
      </ListItem>
    </List>
  );
};
