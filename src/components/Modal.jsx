import React from "react";
import "./modal.css";

function Modal({ closeModal, current, SetCurrent, images }) {
  console.log(images);
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="btn-div">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="img-modal">
          <img
            src={Object.values(current)[0].url}
            alt=""
            className="selected-img"
          />
        </div>
      </div>
      <div className=" btns-div">
        <button 
        
        disabled={+Object.keys(current)[0]==0}
          onClick={() => {
        
            SetCurrent((old) => {
              let NewIndex = +Object.keys(old)[0] - 1;
              return {
                [NewIndex]: images[NewIndex],
                
              };
            });
          }}
        >prev</button>
        <button
        disabled={+Object.keys(current)[0]==images.length-1}
          onClick={() => {
       
            SetCurrent((old) => {
              let NewIndex = +Object.keys(old)[0] + 1;
              return {
                [NewIndex]: images[NewIndex],
              };
            });
          }}
        >next</button>
      </div>
      {console.log(current)}

      <p className="count">
        <span>{+Object.keys(current)[0]+1}</span>/{images.length}
      </p>
    </div>
  );
}
export default Modal;
