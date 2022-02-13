import React, { useState } from 'react';
import { Spinner } from 'components';

const ImgSpinner = (props) => {
  const [ loaded, setLoaded ] = useState(false);
  const onLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000)
  };

  return (
    <>
    <img 
      style={{display: loaded? 'block': 'none'}}
      onLoad={onLoad}
      src={props.src}
      alt={props.alt}
      {...props}
    />
    {!loaded && <Spinner />}
    </>
  );
};

export default ImgSpinner;