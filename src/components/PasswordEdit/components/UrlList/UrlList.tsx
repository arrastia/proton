import React from 'react';

import clsx from 'clsx';

import classes from '../../PasswordEdit.module.css';

import Icon from 'atoms/Icon';
import { List } from 'atoms/List';
import ListItem from 'atoms/ListItem';

type Props = {
  onDelete: any;
  urls: any;
};

export const UrlList = React.memo(({ urls, onDelete }: Props) => {
  return (
    <List className={classes.urlList}>
      {urls?.map((urlEntry: any, index: number) => (
        <ListItem className={classes.urlListItem} dense key={urlEntry}>
          <input autoFocus value={urlEntry} />
          <Icon onClick={() => onDelete(index)} size="small" className="fas fa-times" />
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
