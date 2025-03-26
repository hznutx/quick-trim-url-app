/* eslint-disable prettier/prettier */
import {Button} from '@heroui/button';
import {Input} from '@heroui/input';
import {Snippet} from '@heroui/snippet';
import {useState} from 'react';
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

  const trimUrl = () => {
    const resultUrl = url.split(regex)[0];
    setTrimmedUrl(resultUrl);
  };

  const extractUrl = () => {
    window.open(shortenUrl, '_blank');
    const resultUrl = '';

    // setTrimmedUrl(resultUrl);
  };

  const updateRegex = (e: any) => {
    setRegex(e.target.value);
  };

  return (
    <div className='flex flex-col w-[90vw] xl:w-[60vw] gap-4'>
      <div className='flex gap-3 items-center justify-between w-full'>
        <Input
          required
          className='w-[90%]'
          placeholder='shorten url ://vt.tiktok.com/..'
          type='text'
          value={shortenUrl}
          onChange={handleDefaultUrl}
        />
        <Button
          color='default'
          onPress={extractUrl}>
          <RocketIcon />
        </Button>
      </div>
      <div className='flex gap-3 items-center justify-between w-full'>
        <Input
          required
          placeholder='Enter URL'
          type='text'
          value={url}
          onChange={handleUrlChange}
        />
        {!showOption ? (
          <Button
            style={{backgroundColor: '#eee'}}
            onPress={addCustomRegex}>
            <UnLinkIcon />
          </Button>
        ) : (
          <Input
            className='w-fit'
            label='trim out after'
            placeholder='regex'
            type='text'
            value={regex}
            onChange={updateRegex}
          />
        )}
      </div>
      <Button
        color='primary'
        disabled={!url}
        onPress={trimUrl}>
        Trim URL
      </Button>
      <Snippet
        fullWidth
        hideSymbol
        color='secondary'>
        {trimmedUrl}
      </Snippet>
    </div>
  );
};

export default UrlInput;
