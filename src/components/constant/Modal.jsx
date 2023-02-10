import React from 'react'
import { FiX} from "react-icons/fi";
const Modal = ({title,toggleModal,children,openModal,modalSize,cancelButton,saveButton}) => {
  return (
    <div className={`modal ${openModal ? 'modal-show': ''}`}>
      <div className={`modal-cntr radius-24 ${modalSize}`}>
        <span className="modal-close is-square is-square_sm is-square_circle is-square_icon " onClick={() =>toggleModal()}>
            <FiX size={24}/>
        </span>
        {title && <div className="modal-header">
            <h4>{title}</h4>
        </div> }
        <div className="modal-body">
              {children}
        </div>
        {cancelButton || saveButton && <div className="modal-footer is-flex is-end is-align-center col-gap-16">
            <button className="btn btn-seconary btn-sm">{cancelButton}</button>
            <button className="btn btn-primary btn-sm">{saveButton}</button>
        </div>}
      </div>
    </div>
  )
}

export default Modal