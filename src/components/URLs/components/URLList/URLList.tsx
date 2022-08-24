import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import clsx from 'clsx';

import classes from './URLList.module.css';

import Icon from 'atoms/Icon';
import { List } from 'atoms/List';
import ListItem from 'atoms/ListItem';

import { urlStore } from 'stores/UrlStore';

import type { Url } from 'models/Url';

interface URLListProps {
  onDelete: (id: string) => void;
  urls: Url[];
  id: string;
}

export const URLList = memo(({ urls, onDelete, id }: URLListProps) => {
  // const [urlss, setPassword] = useRecoilState(urlStore(id));
  const urlss = useRecoilValue(urlStore(id));

  // const handleRemoveUrl = (id: string) => setPassword(prev => ({ ...prev, url: prev.url.filter(url => url.id !== id) }));

  return (
    <List className={classes.urlList}>
      {urlss.map(({ id, link }) => (
        <ListItem className={classes.urlListItem} dense key={id}>
          <input value={link} />
          <Icon className="fas fa-times" onClick={() => id} size="small" />
        </ListItem>
      ))}

      {urlss.length === 0 && (
        <ListItem className={clsx(classes.urlListItem, classes.urlListItemEmpty)} dense>
          No urls added
        </ListItem>
      )}
    </List>
  );
});
