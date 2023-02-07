import React from 'react'

const ServiceCard = ({title,icon,description}) => {
  return (
    <div className="sevice-item">
      <div className="service-item_icon">
        <img src={icon} alt=''/>
      </div>
      <div className="service-item_content">
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard