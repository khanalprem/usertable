import React from 'react'
import { useAppContext } from '../context/store';
import ServiceCard from './ServiceCard';

const ServiceCardMap = () => {
  const {data} = useAppContext();
  // const {data} = useDataContext();
  console.log(data)
  const serviceData = data.filter((item) => item.name === "services")[0].serviceItems;
  return (
    <div className="services-wrap gap-24 pt-24">
            {serviceData.map((item, index) => {
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
  )
}

export default ServiceCardMap