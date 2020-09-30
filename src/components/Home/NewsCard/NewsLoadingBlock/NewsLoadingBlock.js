import React from 'react';
import ContentLoader from 'react-content-loader';

const NewsLoadingBlock = ({ darkMode }) => {
  return (
    <ContentLoader
      speed={2}
      width={378}
      height={487}
      viewBox="0 0 378 487"
      backgroundColor={darkMode ? '#424242' : '#f2f2f2'}
      foregroundColor={darkMode ? '#303030' : '#ecebeb'}>
      <rect x="0" y="0" rx="5" ry="5" width="378" height="200" />
      <rect x="16" y="216" rx="5" ry="5" width="347" height="121" />
      <rect x="8" y="353" rx="5" ry="5" width="363" height="28" />
    </ContentLoader>
  );
};

export default NewsLoadingBlock;
