import React from 'react'
import Data from '../Data';
import ServiceCard from '../ServiceCard';

const Services = () => {
  const ServiceData = Data.filter((item) => item.name === "services")[0]
    .serviceItems;
  return (
    <>
    <div className="hero is-flex is-center  dir-column ">
        <div className="container">
          <div className="hero-content hero-content_page clr-white">
            <h5 className="fw-600 "><span className="line-shape pb-12 line-shape_left">What we do</span></h5>
            
            <h1 className="mt-32 mb-32 fs-h2 ">we work on <span className='italic'> ideas</span>  that can provide <span className='italic'> simple solutions</span> to <span className='italic'> complex</span> problems</h1>
            <p className="fw-500">
              Smooth <span className="italic">Business </span> starts with good service  <span className="italic">consultation</span>.
            </p>
            
          </div>
        </div>
      </div>
      <section className="services services-page">
        <div className="container">
          <div className="title  mb-40">
            <div className="title-content ">
              <h5 className="clr-secondary">
                <span className="line-shape line-shape_left">services</span>
              </h5>
            </div>
          </div>
          <div className="services-wrap gap-24 pt-24">
            {ServiceData.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services