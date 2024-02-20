import React from 'react';
import background from '../../assets/img/banners/5.jpg'

const Showcase = ({title}) => {
  return (
    <section className="py-5 bg-dark inner-header" style={{
      background: `linear-gradient(0deg, rgba(100, 100, 100, 0.5), rgba(150, 150, 150, 0.5)), url(${background}) center center`,
      backgroundSize: 'cover'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mt-0 mb-3 text-white">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase;
