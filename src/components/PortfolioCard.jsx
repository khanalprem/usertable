import React from 'react'

const PortfolioCard = ({onClick,image,title,description,client,startDate,endDate}) => {
  return (
    <div className="highlight-item clr-white_bg radius-8 pd-24" onClick={onClick}>
      <figure className="highlight-item_figure">
        <img src={image} alt=''/>
      </figure>
      <div className="highlight-item_content">
          <h4 className="mb-16 trim-1">{title}</h4>
          <p className="trim-2">{description}</p>
          <div className='highlight-item_client mt-16'>
            <div className='client'>
              <span className="fs-md is-uppercase fw-600">Client</span>
              <p className="is-capitalize fw-600 clr-primary">{client}</p>
            </div>
            <div className='duration'>
              <span className="fs-md is-uppercase fw-600">Time Duration</span>
              <div className='is-flex is-align-center is-start col-gap-12 fs-md'>
                <time>{startDate} </time>
                <span>-</span>
                <time>{endDate}</time>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PortfolioCard