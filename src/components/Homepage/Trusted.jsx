import React from 'react';

const images = import.meta.globEager('../../assets/img/agencies/*')

const Trusted = () => {
  return (
    <ul className="trusted-by">
      {Object.values(images).map((img, index) => {
        return (<li key={index}><img style={{height: '50px'}} src={img.default}/></li>)
      })}
    </ul>
  );
};

export default Trusted;
