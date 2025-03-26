import {Button} from '@heroui/button';
import {Code} from '@heroui/code';
import {Snippet} from '@heroui/snippet';
import {useState} from 'react';

const UrlInput = () => {
  const [url, setUrl] = useState('');
  const [trimmedUrl, setTrimmedUrl] = useState('');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const trimUrl = () => {
    // Trim the URL before '?' and set the trimmed URL state
    const resultUrl = url.split('?')[0];

    setTrimmedUrl(resultUrl);
  };

  return (
    <div className='mt-8'>
      {/* Input for URL */}
      <input
        className='mt-4 w-full mr-4 p-2 border border-gray-300 rounded'
        placeholder='Enter URL'
        type='text'
        value={url}
        onChange={handleUrlChange}
      />

      {/* Button to trigger URL trimming */}
      <Button
        className='mt-4'
        color='primary'
        onPress={trimUrl}>
        Trim URL
      </Button>

      {/* Display the trimmed URL */}

      <div className='mt-4'>
        <p>Trimmed URL:</p>
        <Snippet
          fullWidth
          hideSymbol
          variant='bordered'>
          {trimmedUrl && <Code color='default'>{trimmedUrl}</Code>}
        </Snippet>
      </div>
    </div>
  );
};

export default UrlInput;
