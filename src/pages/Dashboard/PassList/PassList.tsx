import { List } from 'atoms/List';
import ListItem from 'atoms/ListItem';
import { PasswordThumbnail } from 'components/PasswordThumbnail';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isSelectedState, selectedPasswordIdState } from 'stores/PasswordStore';

type Props = {
  id: string;
  name: string;
  username: string;
  lastModifiedAt: number;
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
