import React, { useState } from 'react';
import { createShortUrl } from '../api/shortUrl.api';
const UrlForm = () => {
  const [url, setUrl] = useState("https://www.google.com");
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);
  
  
  const handleSubmit = async() => {
     const shortUrl = await createShortUrl(url);
     setShortUrl(shortUrl)
     
  }


  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }


  return (
    <div  className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onInput={(event)=>setUrl(event.target.value)}
              
              placeholder="https://example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
          onClick={handleSubmit}
            type="submit"
            
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >Shorten Url
           
          </button>
          {/* {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )} */}
        
        {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
               <button
                onClick={handleCopy}
                className={`ml-2 p-2 rounded-md transition-colors duration-300 ${
                  copied ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
        </div>
  )
}

export default UrlForm;