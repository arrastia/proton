import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { Styles } from './URLInput.styles';

import { Input } from 'atoms/Input';

import { urlsState } from 'stores/URLStore';

import { validateUrl } from 'utils/url';

import type { ChangeEvent, KeyboardEvent } from 'react';
import type { Url } from 'models/Url';

export const URLInput = ({ id }: { id: string }) => {
  const setPassword = useSetRecoilState(urlsState(id));

  const [input, setInput] = useState('');

  const handleUrlAdd = () => {
    if (!validateUrl(input)) return;

    const newUrl: Url = { id: Date.now().toString(), link: input };

    setPassword(prevUrls => [...prevUrls, newUrl]);
    handleResetInput();
  };

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInput(value);

    console.log('new validateUrl(value) :>> ', validateUrl(value));
    if (validateUrl(value)) {
      load_pic(value);
    }
  };

  const handleEnter = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') handleUrlAdd();

    if (key === 'Escape') handleResetInput();
  };

  const handleResetInput = () => setInput('');

  const getFavicon = async (url: string) => {
    // const urlParts = url.split('/');
    // const domain = urlParts[2];
    // const domainParts = domain.split('.');
    // const domainPartsLength = domainParts.length;

    const test = await (await fetch(`${url}/favicon.ico`)).blob();
    console.log('new test :>> ', test);
  };

  async function load_pic(url: string) {
    // const request = new XMLHttpRequest();
    // console.log('request :>> ', request);
    // request.open('GET', url, true);
    // request.responseType = 'blob';

    // request.onload = function () {
    //   console.log('request.status :>> ', request.status);
    //   if (request.status === 200) {
    //     const reader = new FileReader();
    //     reader.onload = function () {
    //       const dataURL = reader.result;
    //       console.log('new dataURL :>> ', dataURL);
    //     };
    //     reader.readAsDataURL(request.response);
    //   }
    // };

    const response = await fetch(url, { method: 'GET' });
    console.log('response :>> ', response);

    if (response.status === 200) {
      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);

      const image = document.createElement('img');
      image.src = imageObjectURL;

      return image;
    } else {
      console.log('HTTP-Error: ' + response.status);
    }
  }

  return (
    <Styles.Container>
      <Input inputMode="url" onChange={handleInputChange} onKeyUp={handleEnter} placeholder="Your URL" type="email" value={input} />
      <Styles.AddButton onClick={handleUrlAdd}>+</Styles.AddButton>
    </Styles.Container>
  );
};
