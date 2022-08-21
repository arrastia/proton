import { useSetRecoilState } from 'recoil';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

import URLList from './components/URLList';
import { Button } from 'atoms/Button/Button';
import Input from 'atoms/Input';
import { Labelled } from 'atoms/Labelled';

import type { Url } from 'models/Url';
import { passwordsState } from 'stores/PasswordStore';
import { validateUrl } from 'utils/url';

export const URLs = ({ id }: { id: string }) => {
  const setPassword = useSetRecoilState(passwordsState(id));

  const [input, setInput] = useState('');
  const [urls, setUrls] = useState<Url[]>([]);

  const handleUrlAdd = () => {
    if (!validateUrl(input)) {
      return;
    }

    const newUrl = { id: Date.now().toString(), link: input } as Url;

    setPassword(prev => ({ ...prev, url: [...prev.url, newUrl] }));
    handleResetInput();
  };

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };

  const handleEnter = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') handleUrlAdd();

    if (key === 'Escape') handleResetInput();
  };

  const handleRemoveUrl = (id: string) => setUrls(previousURLs => previousURLs.filter(url => url.id !== id));

  const handleResetInput = () => setInput('');

  return (
    <Labelled label="url">
      <div className="row">
        <Input inputMode="url" onChange={handleInputChange} onKeyUp={handleEnter} style={{ marginRight: 4 }} type="email" value={input} />
        <Button onClick={handleUrlAdd}>Add</Button>
      </div>

      <URLList id={id} onDelete={handleRemoveUrl} urls={urls} />
    </Labelled>
  );
};
