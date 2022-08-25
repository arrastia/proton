import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import clsx from 'clsx';

import classes from './URLList.module.css';

import { List } from 'atoms/List';
import Icon from 'atoms/Icon';
import ListItem from 'atoms/ListItem';

import { urlsState } from 'stores/URLStore';

interface URLListProps {
  id: string;
}

export const URLList = memo(({ id }: URLListProps) => {
  const urls = useRecoilValue(urlsState(id));

  return (
    <List className={classes.urlList}>
      {urls.map(({ id, link }) => (
        <ListItem className={classes.urlListItem} dense key={id}>
          <input value={link} />
          <Icon className="fas fa-times" onClick={() => id} size="small" />
        </ListItem>
      ))}

      {urls.length === 0 && (
        <ListItem className={clsx(classes.urlListItem, classes.urlListItemEmpty)} dense>
          No urls added
        </ListItem>
      )}
    </List>
  );
});
