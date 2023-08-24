import React, { useState, useEffect } from 'react';

const GoogleVerification = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function fetchHtml() {
      try {
        const response = await fetch('../../public/googlebe59070fd013feec.html');
        const htmlText = await response.text();
        setHtmlContent(htmlText);
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    }
    fetchHtml();
  }, []);

  return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
  );
}

export default GoogleVerification;
