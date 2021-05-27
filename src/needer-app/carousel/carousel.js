import React, { useState } from "react";
import { useFormik } from "formik";
import Carousel from "react-bootstrap/carousel";
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel(props) {
  const [userHelper, setuserHelper] = useState(0);
  const { listHelpers } = props;
  const sendChooseToDB = (values) => {
    let urlToDB="http://localhost:8081/api/v1/chosenHelper";
    fetch(urlToDB, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        res = res.text();
      })
      .then((json) => {
        console.log(json);
      });
  };
  const formik = useFormik({
    initialValues: {
      usernameNeeder: localStorage.getItem('user'), //de fapt pun aici ceva gen local.Storage('username')
      usernameHelper: "",
    },
    onSubmit: (values) => {
      formik.values.usernameHelper= userHelper;
      sendChooseToDB(values);
    },
  });
  
  return (
    <div className="bg">
      <Carousel>
      { listHelpers.map((helper) => {

        const setAndSubmit = () => {
        setuserHelper(helper.username);
        console.log(helper.username);
        formik.handleSubmit();
    }

        return (<Carousel.Item>
          <div className="item">
            <div className="helperDisplay">
              <div className="helpInfo">
                <h1>Username helper:{helper.username} </h1>
                <p>Adresa helperului:{helper.adress} </p>
                <p>Distanta:{helper.distance} </p>
                <p>Scor:{helper.score} </p>
                <p> Resurse comune: {
                   Object.keys(helper.commonResources).map((key) => <p> {key} : {helper.commonResources[key]}</p>)
                }
                </p>
              </div>
              <div className="buttonSend">
                <button className="buttonS" type="submit" onClick={setAndSubmit}>
                  Alegeti acest helper
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>)})
      }  
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
