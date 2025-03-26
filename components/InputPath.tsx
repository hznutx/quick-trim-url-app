/* eslint-disable prettier/prettier */
import {Button} from '@heroui/button';
import {Input} from '@heroui/input';
import {Snippet} from '@heroui/snippet';
import {useState} from 'react';
import {Code} from '@heroui/code';

import {RocketIcon, UnLinkIcon} from './icon';

const UrlInput = () => {
  const [url, setUrl] = useState('');
  const [showOption, setShowOption] = useState(false);
  const [shortenUrl, setShortenUrl] = useState('');
  const [trimmedUrl, setTrimmedUrl] = useState('result convert url');
  const [regex, setRegex] = useState('?');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleDefaultUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortenUrl(e.target.value);
  };

  const addCustomRegex = () => {
    setShowOption((prev) => !prev);
  };

  const trimUrlSubmit = () => {
    const resultUrl = url.split(regex)[0];

    setTrimmedUrl(resultUrl);
  };

  const extractUrl = (shortenUrl: string) => {
    let newWindow = window.open(shortenUrl);
    setTimeout(() => {
      if (newWindow) {
        setUrl(newWindow?.location?.href);
      }
      newWindow?.close();
    }, 5000);
  };

  const updateRegex = (e: any) => {
    setRegex(e.target.value);
  };

  const clearValue = (setFunc: (input: string) => void) => {
    setFunc('');
  };

  return (
    <div className='flex flex-col w-[90vw] xl:w-[60vw] gap-4'>
      <div className='flex gap-3 items-center justify-between w-full'>
        <Input
          isClearable
          required
          className='w-[90%]'
          placeholder='shorten url ://vt.tiktok.com/..'
          type='text'
          value={shortenUrl}
          onChange={handleDefaultUrl}
          onClear={() => clearValue(setShortenUrl)}
        />
        <Button
          color='primary'
          onPress={() => extractUrl(shortenUrl)}>
          <div className='text-white'>
            <RocketIcon />
          </div>
        </Button>
      </div>
      <div className='flex gap-3 items-center justify-between w-full'>
        <Input
          isClearable
          required
          placeholder='Enter URL'
          type='text'
          value={url}
          onChange={handleUrlChange}
          onClear={() => clearValue(setUrl)}
        />
        <Button
          color='success'
          onPress={addCustomRegex}>
          <div className='text-white'>
            <UnLinkIcon />
          </div>
        </Button>
      </div>
      {showOption && (
        <Input
          fullWidth
          label='regex (default = ?)'
          type='text'
          value={regex}
          onChange={updateRegex}
        />
      )}
      <Button
        color='secondary'
        disabled={!url}
        onPress={trimUrlSubmit}>
        Trim URL
      </Button>
      <Snippet
        fullWidth
        hideSymbol
        classNames={{pre: 'whitespace-normal'}}
        id='trim-result'>
        {trimmedUrl}
      </Snippet>
    </div>
  );
};

export default UrlInput;
