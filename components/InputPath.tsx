/* eslint-disable prettier/prettier */
import {Button} from '@heroui/button';
import {Input} from '@heroui/input';
import {Snippet} from '@heroui/snippet';
import {useState} from 'react';

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
          color='success'
          disabled={!url}
          onPress={trimUrlSubmit}>
          <div className='text-white'>
            <UnLinkIcon />
          </div>
        </Button>
      </div>
      <Button
        color='secondary'
        onPress={addCustomRegex}>
        optional convert{' '}
      </Button>
      {showOption && (
        <Input
          fullWidth
          endContent={
            <button
              className='relative pb-1 hover:text-teal-400 flex-shrink-0'
              onClick={trimUrlSubmit}>
              <RefreshIcon />
            </button>
          }
          label='trim out after: (default = ?)'
          type='text'
          value={regex}
          onChange={updateRegex}
        />
      )}

      <Snippet
        fullWidth
        hideSymbol
        classNames={{pre: 'whitespace-normal w-[85%] line-clamp-1'}}
        id='trim-result'
        variant='bordered'>
        {trimmedUrl}
      </Snippet>
    </div>
  );
};

export default UrlInput;
