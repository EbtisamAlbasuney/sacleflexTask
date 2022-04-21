import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./style.css";
import axios from "axios";

function App() {
  const [images, Setimages] = useState([]);
  const [openModal, SetOpenModal] = useState(false);
  const [current, SetCurrent] = useState({});
  const [disable, SetDisable] = useState(false);
  const [disable2, SetDisable2] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        Setimages(response.data);
      });
  }, []);

  return (
    <>
      <h1>Welcome to my gallary !!</h1>
      <div className="app">
        <div className="container">
          <div className="container-img">
            {images.map((img, index) => (
              <img
                alt="show-img"
                key={index}
                src={img.url}
                onClick={() => {
                //   console.log(Object.keys(current)[0]);
                //   if(Object.keys(current)[0]==0){
                // SetDisable(true)    

                //   }
                //   if(Object.keys(current)[0]==29){
                //     SetDisable2(true)    
                //       }
                  SetOpenModal(true);
                  SetCurrent({ [index]: img });
                  
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {openModal && images && (
        <Modal
          current={current}
          SetCurrent={SetCurrent}
          closeModal={SetOpenModal}
          images={images}
          disable={disable}
          disable2={disable2}
        />
      )}
    </>
  );
}
export default App;
