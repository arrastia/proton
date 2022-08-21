import List from 'atoms/List';
import ListItem from 'atoms/ListItem';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isSelectedState, selectedPasswordIdState } from 'stores/PasswordStore';

type Props = {
  id: string;
  name: string;
  username: string;
};

export const PassList = ({ name, username, id }: Props) => {
  const isSelected = useRecoilValue(isSelectedState(id));

  const setSelectedPassword = useSetRecoilState(selectedPasswordIdState);

  return (
    <List id={id}>
      <ListItem isSelected={isSelected} onClick={() => setSelectedPassword(id)}>
        <h1>{name}</h1>
        <h2>{username}</h2>
      </ListItem>
    </List>
  );
};
