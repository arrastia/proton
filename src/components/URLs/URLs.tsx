import { ChangeEvent, KeyboardEvent, useState } from 'react';

import URLList from './components/URLList';
import Button from 'atoms/Button';
import Input from 'atoms/Input';
import Labelled from 'atoms/Labelled';

import type { Url } from 'models/Url';

export const URLs = () => {
  const [input, setInput] = useState('');
  const [urls, setUrls] = useState<Url[]>([]);

  const handleUrlAdd = () => setUrls(previousURLs => [...previousURLs, { id: Date.now().toString(), link: input }]);

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setInput(value);

  const handleEnter = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') handleUrlAdd();

    if (key === 'Escape') setInput('');
  };

  const handleRemoveUrl = (id: string) => setUrls(previousURLs => previousURLs.filter(url => url.id !== id));

  return (
    <Labelled label="url">
      <div className="row">
        <Input inputMode="url" onChange={handleInputChange} onKeyUp={handleEnter} style={{ marginRight: 4 }} type="email" value={input} />
        <Button onClick={handleUrlAdd}>Add</Button>
      </div>

      <URLList onDelete={handleRemoveUrl} urls={urls} />
    </Labelled>
  );
};
