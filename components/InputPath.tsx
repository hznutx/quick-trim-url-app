/* eslint-disable prettier/prettier */
import {Button} from '@heroui/button';
import {Input} from '@heroui/input';
import {Snippet} from '@heroui/snippet';
import {useEffect, useState} from 'react';

import {RefreshIcon, RocketIcon, UnLinkIcon} from './icon';

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
    if (!showOption) {
      setRegex('?');
    }
  };

  const trimUrlSubmit = () => {
    const resultUrl = url.split(regex)[0];

    setTrimmedUrl(resultUrl);
  };

  const extractUrl = (shortenUrl: string) => {
    window.open(shortenUrl, '_blank');
  };

  const updateRegex = (e: any) => {
    setRegex(String(e.target.value).toLowerCase());
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
          disabled={!shortenUrl}
          onPress={() => extractUrl(shortenUrl)}>
          <div className='text-white'>
            <RocketIcon />
          </div>
        </Button>
      </div>
      <div className='flex gap-3 items-center justify-between w-full'>
        <Input
          fullWidth
          isClearable
          required
          placeholder='original URL'
          type='text'
          value={url}
          onChange={handleUrlChange}
          onClear={() => clearValue(setUrl)}
        />
        <Button
          color='secondary'
          disabled={!url}
          onPress={trimUrlSubmit}>
          <div className='text-white'>
            <UnLinkIcon />
          </div>
        </Button>
      </div>
      <Button
        fullWidth
        color={showOption ? 'warning' : 'default'}
        onPress={addCustomRegex}>
        {!showOption ? 'optional convert' : 'reset'}
      </Button>
      {showOption && (
        <Input
          fullWidth
          autoCapitalize='none'
          endContent={
            <button
              className='relative pb-1 cursor-pointer hover:text-teal-400 flex-shrink-0'
              onClick={trimUrlSubmit}>
              <RefreshIcon />
            </button>
          }
          label='trim out after: (default = ?)'
          type='text'
          value={regex.toLowerCase()}
          onChange={updateRegex}
        />
      )}

      <Snippet
        fullWidth
        hideSymbol
        classNames={{pre: 'whitespace-normal text-wrap w-[88%] line-clamp-1'}}
        color='success'
        id='trim-result'
        variant='bordered'>
        {trimmedUrl}
      </Snippet>
    </div>
  );
};

export default UrlInput;
