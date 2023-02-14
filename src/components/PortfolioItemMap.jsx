import React,{useState} from 'react'
import PortfolioCard from './PortfolioCard';
import { FiArrowRight } from "react-icons/fi";
import Modal from './constant/Modal';
import { useAppContext } from '../context/store';



const PortfolioItemMap = ({visible,showmoreButton,showmore}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

const {data} = useAppContext()
  console.log(data)

  const HighlightData = data.filter((item) => item.name === "highlight")[0]
    .highlightItems;
  const highlightLength = HighlightData.length;

  const toggleModal = () => {
    setOpenModal(!openModal);
  };


  return (
    <>
    <div className="highlight-wrap gap-24 pt-24">
    {HighlightData.slice(0, visible).map((item, index) => {
      return (
        <PortfolioCard
          onClick={() => {
            setModalItem(item);
            toggleModal();
          }}
          
          key={index}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          client={item.client}
          startDate={item.startDate}
          endDate={item.endDate}
        />
      );
    })}
    </div>
    {showmore && <div className="is-flex is-center mt-40">
      
      {highlightLength >= visible ? (
        <button
          onClick={() => showmoreButton()}
          className="btn btn-secondary   is-flex is-align-center col-gap-8 fw-500 is-uppercase"
        >
          <span>view more</span>
          <FiArrowRight />
        </button>
      ) : null}
    </div>}
    <Modal
        toggleModal={toggleModal}
        openModal={openModal}
        modalSize="modal-cntr_lg"
      >
        <div className="highlight-item_content">
          <h4 className="mb-16">{modalItem.title}</h4>
          <p>{modalItem.description}</p>
          <div className='highlight-item_client mt-16'>
            <div className='client'>
              <span className="fs-md is-uppercase fw-600">Client</span>
              <p className="is-capitalize fw-600 clr-primary">{modalItem.client}</p>
            </div>
            <div className='duration'>
              <span className="fs-md is-uppercase fw-600">Time Duration</span>
              <div className='is-flex is-align-center is-start col-gap-12 fs-md'>
                <time>{modalItem.startDate} </time>
                <span>-</span>
                <time>{modalItem.endDate}</time>
              </div>
            </div>
          </div>
      </div>
      </Modal>
    </>
  )
}

export default PortfolioItemMap