import React, { useState, useEffect } from 'react';
import './style.css';
import Tags from "./tags";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import CantitateInput from "./cantitateInput";
import ControlledCarousel from '../../carousel/carousel.js';

function AlteServicii() {
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([]);
    const [cantitate, setCantitate] = useState([]);
    const [helper, setHelper] = useState([]);
    let count = 0;
    const API_URL = "https://reqres.in/api/users/2"


    const sendItemsToDB = (values) => {
        //ar cam trebui un body pt json gen ca un body request
        fetch("https://reqres.in/api/users/2", {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => {
                res = res.json();
                seteazaHelper(res);
            }).then(json => {
                console.log(json)
            })

    }
    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            // cererea poate fi rezolvată – fulfill
            return Promise.resolve(response)
        } else {
            // cererea a fost refuzată – reject
            return Promise.reject(new Error(response.statusText))
        }
    }
    const receiveTop = () => {
        fetch('https://www.random.org/sequences/?min=1&max=33&col=1&format=plain')
            .then(status)
            .then(response => response.text())
            .then(response => {
                alert(response);
                let helpersList = [];
                /*json.forEach(user => {
                    //cred ca mai bine setez aici
                    console.log(user)
                    helpersList = [...helpersList, user];
                })*/
                //seteazaHelper(helpersList)//nu cred ca mai are rost chestia asta
                //gen setarea starii cu noii helperi in componenta aia cu top
                console.log(response);
                seteazaLoading();
            })
            .catch(error => {
                alert("nasol coe");
            })
    };



    const formik = useFormik({
        initialValues: {
            //username: '',
            tip_nevoie: 'Serviciu',
            tags: {},
            details: '',
        },
        onSubmit: values => {
            document.getElementById("loader1").style.display = "inline";
            //values.username=local.Storage("username");
            let tagValues = tags;
            tagValues.map((tag, index) => {
                tag.name = tag.text;
                delete tag["id"];
                delete tag["text"];
                return tag;
            })
            if (formik.values.tip_nevoie === "Produs")
                tagValues.map((tag, index) => tag["quantity"] = cantitate[index])
            else
                tagValues.map((tag) => tag["quantity"] = -1)
            delete values["tip_nevoie"];
            tagValues.map((tag) => values.tags[tag.name] = tag.quantity)
            alert(JSON.stringify(values))
            //sendItemsToDB(values);
            receiveTop();
        }
    });
    const seteazaHelper = (help) => {
        setHelper(help)
    }
    const formikNevoie = () => {
        let selectedRadio = "";
        if (document.getElementById("selectServiciu").checked) {
            selectedRadio = "Serviciu";
        }
        else {
            selectedRadio = "Produs";
        }
        if (formik.values.tip_nevoie !== selectedRadio)
            setTags([]);
        formik.values.tip_nevoie = selectedRadio;
    }

    const seteazaLoading = () => {
        if (loading === false)
            setLoading(true);
        else
            setLoading(false);
    }

    const seteazaTag = (tag) => {
        setTags(tag);
    }
    return (

        <div className="wrapper" id="test">
            {!loading ? (<div className="wrapper_form">
                <form onSubmit={formik.handleSubmit}>
                    <div className="DescriereNevoie"><label>Descriere nevoie</label> </div> <br />

                    <label htmlFor="tip_nevoie">Alegeți tipul de nevoie</label><br />
                    <input defaultChecked onChange={formikNevoie} type="radio" id="selectServiciu" name="tip_nevoie" value="Servicii" required /> Servicii <br />
                    <input onChange={formikNevoie} type="radio" id="selectProdus" name="tip_nevoie" value="Produse" required /> Produse
                <br />
                    <div id="listaTags">
                        <Tags giveTags={seteazaTag} tags={tags} check={formik.values.tip_nevoie} />
                    </div>
                    <textarea id="descriere_text_box" name="details" onChange={formik.handleChange} />
                    <br />
                    {
                        (formik.values.tip_nevoie === "Produs") ?
                            tags.map((tag) =>
                                <CantitateInput quantity={cantitate} giveQuantity={setCantitate} tag={tag} keys={++count} />) : undefined
                    }
                    <div className="alignRight">
                        <div className="butonSubmit" onClick={formik.handleSubmit} type="submit">
                            Trimite
                            <div id="loader1" class="spinner-border text-danger" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>

                </form>
            </div>) : <ControlledCarousel/>/*
            aici tre cred sa bagam componenta la care o facut Tudor in care sa dam la props acei helperi cred : ai dreptate robi
            */}

        </div>
    );
}

export default AlteServicii;
