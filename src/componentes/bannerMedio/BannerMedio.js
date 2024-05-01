import React from 'react';
import './BannerMedio.css';

function BannerMedio(props) {
  return (
    <div className="banner-medio" style={{backgroundImage: `url(${props.backgroundImage})`}}>
      <h1>{props.texto}</h1>
    </div>
  );
}

export default BannerMedio;