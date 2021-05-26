import React, { useState } from "react";
import { useFormik } from "formik";
import Carousel from "react-bootstrap/carousel";
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const sendChooseToDB = (values) => {
    fetch("https://reqres.in/api/users/2", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        res = res.json();
      })
      .then((json) => {
        console.log(json);
      });
  };
  const formik = useFormik({
    initialValues: {
      usernameNeeder: "", //de fapt pun aici ceva gen local.Storage('username')
      usernameHelper: "",
    },
    onSubmit: (values) => {
      sendChooseToDB(values);
    },
  });
  return (
    <div className="bg">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="item">
            <div className="helperDisplay">
              <div className="helpInfo">
                <h1>Username helper:{} </h1>
                <p>Adresa helperului:{} </p>
                <p>Distanta:{} </p>
                <p>Scor:{} </p>
                <p> Resurse comune: </p>
              </div>
              <div className="common">
                {/*cred ca aici merge sa facem inserarile cu java vanilla */}
              </div>
              <div className="buttonSend">
                <button className="buttonS" onclick={formik}>
                  Alegeti acest helper
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <div className="helperDisplay">
              <h1>
                Username helper:
                {/*pus aici propietatea unui helper sugerez da bn robi <3 */}{" "}
              </h1>
              <p>Adresa helperului:{} </p>
              <p>Distanta:{} </p>
              <p>Scor:{} </p>
              <p> Resurse comune: </p>
              <div className="common">
                {/*cred ca aici merge sa facem inserarile cu java vanilla */}
              </div>
              <button class="buttonS" onclick={formik}>
                Alegeti acest helper
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <div className="helperDisplay">
              <h1>
                Username helper:
                {/*pus aici propietatea unui helper sugerez da bn robi <3 */}{" "}
              </h1>
              <p>Adresa helperului:{} </p>
              <p>Distanta:{} </p>
              <p>Scor:{} </p>
              <p> Resurse comune: </p>
              <div className="common">
                {/*cred ca aici merge sa facem inserarile cu java vanilla */}
              </div>
              <button class="buttonS" onclick={formik}>
                Alegeti acest helper
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
