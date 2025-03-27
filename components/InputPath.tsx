import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Snippet } from '@heroui/snippet';
import { useState } from 'react';
import { Switch } from '@heroui/switch';
import { addToast } from '@heroui/toast';

import { RefreshIcon, RocketIcon, UnLinkIcon } from './icon';

const UrlInput = () => {
  const [url, setUrl] = useState('');
  const [showOption, setShowOption] = useState(false);
  const [shortenUrl, setShortenUrl] = useState('');
  const [trimmedUrl, setTrimmedUrl] = useState('');
  const [regex, setRegex] = useState('?');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleDefaultUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortenUrl(e.target.value);
  };

  const trimUrlSubmit = () => {
    const resultUrl = url.split(regex)[0];

    setTrimmedUrl(resultUrl);
  };

  const triggerConvert = async () => {
    addToast({
      size: 'sm',
      closeIcon: true,
      color: 'success',
      title: 'copied success',
    });
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

  const resetField = () => {
    clearValue(setUrl);
    setTrimmedUrl('');
    setRegex('?');
  };

  return (
    <div className="flex flex-col w-[90vw] xl:w-[60vw] gap-4">
      <div className="flex gap-3 items-center justify-between w-full">
        <Input
          fullWidth
          isClearable
          required
          placeholder="shorten url ://vt.tiktok.com/.."
          type="text"
          value={shortenUrl}
          onChange={handleDefaultUrl}
          onClear={() => clearValue(setShortenUrl)}
        />
        <Button
          isIconOnly
          color="primary"
          disabled={!shortenUrl}
          variant="faded"
          onPress={() => extractUrl(shortenUrl)}
        >
          <RocketIcon />
        </Button>
      </div>
      <div className="flex gap-3 items-center justify-between w-full">
        <Input
          fullWidth
          isClearable
          placeholder="paste full URL"
          type="text"
          value={url}
          onChange={handleUrlChange}
          onClear={resetField}
        />
        <Switch
          aria-label="regex"
          color="warning"
          isSelected={showOption}
          size="sm"
          onValueChange={setShowOption}
        />
      </div>
      {showOption && (
        <Input
          fullWidth
          autoCapitalize="none"
          color="warning"
          endContent={
            <button
              className="relative pb-1 cursor-pointer hover:text-teal-400 flex-shrink-0"
              onClick={() => setRegex('')}
            >
              <RefreshIcon />
            </button>
          }
          label="optional regex: (default = ?)"
          type="text"
          value={regex !== '?' ? regex.toLowerCase() : ''}
          variant="bordered"
          onChange={updateRegex}
        />
      )}

      <Button
        fullWidth
        color="secondary"
        disabled={!url}
        onPress={trimUrlSubmit}
      >
        <div className="inline-flex gap-3 items-center justify-center text-white">
          convert to anonymous user <UnLinkIcon />
        </div>
      </Button>

      <Snippet
        fullWidth
        hideSymbol
        aria-placeholder="result url:"
        classNames={{
          pre: 'whitespace-normal text-wrap w-[88%] line-clamp-1',
        }}
        color={trimmedUrl ? 'success' : 'default'}
        disableCopy={!trimmedUrl}
        id="trim-result"
        variant="bordered"
        onCopy={triggerConvert}
      >
        {trimmedUrl}
      </Snippet>
    </div>
  );
};

export default UrlInput;
