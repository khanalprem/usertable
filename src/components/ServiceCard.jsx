import React from 'react'

const ServiceCard = ({title,icon,description}) => {
  return (
    <div className="services-item clr-white_bg radius-8 pd-24">
      <div className="services-item_icon">
        <img src={icon} alt=''/>
      </div>
      <div className="services-item_content">
          <h4 className="mb-24">{title}</h4>
          <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard