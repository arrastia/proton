import { memo } from 'react';

import clsx from 'clsx';

import classes from './URLList.module.css';

import Icon from 'atoms/Icon';
import List from 'atoms/List';
import ListItem from 'atoms/ListItem';

import type { Url } from 'models/Url';

interface URLListProps {
  onDelete: (id: string) => void;
  urls: Url[];
}

export const URLList = memo(({ urls, onDelete }: URLListProps) => {
  return (
    <List className={classes.urlList}>
      {urls?.map(({ id, link }) => (
        <ListItem className={classes.urlListItem} dense key={id}>
          <input autoFocus value={link} />
          <Icon className="fas fa-times" onClick={() => onDelete(id)} size="small" />
        </ListItem>
      ))}

      {urls?.length === 0 && (
        <ListItem className={clsx(classes.urlListItem, classes.urlListItemEmpty)} dense>
          No urls added
        </ListItem>
      )}
    </List>
  );
});
