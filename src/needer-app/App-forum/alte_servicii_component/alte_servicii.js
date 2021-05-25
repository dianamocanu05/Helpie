import React, { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import './style.css';
import Tags from "./tags";
import { useFormik } from 'formik';
import CantitateInput from "./cantitateInput";
import ControlledCarousel from '../../carousel/carousel.js';

function AlteServicii() {
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([]);
    const [cantitate, setCantitate] = useState([]);
    const [suggest, setSuggest] = useState(new Map());
    const [suggest1, setSuggest1] = useState([]);
    const [helper, setHelper] = useState([]);
    let count = 0;
    const API_URL = "https://reqres.in/api/users/2"

    const zapierURLDebbuging = "https://hooks.zapier.com/hooks/catch/10117216/byp97u8";


    const sendItemsToDB = (values) => {
        //ar cam trebui un body pt json gen ca un body request
        fetch("https://all-db.herokuapp.com/api/v1/requestNeeder", {
            method: "POST",
            body: JSON.stringify(values),
            headers:
            {
                "Content-type": "application/json",
                // 'token': localStorage.getItem('token')          
            },
        })
            .then(res => res.json())
            .then(res =>
                console.log("Succes:" + res.message)
            )
            .catch(error => {
                alert("Error:" + error);
            })
    }

    const seteazaSugestii = (suggest) => {
        setSuggest(suggest);
    }

    useEffect(() => {
        fetch("https://all-db.herokuapp.com/api/v1/needs")
            .then(status)
            .then(res => res.json())
            .then(resJson => {
                console.log("ii bine");
                console.log(resJson);
                seteazaSugestii(resJson);
            })
            .catch(error => {
            })
    }, [])

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
            .then(response => response.text())// ---l-am folosit pentru a testa daca ii decent fetch-ul
            .then(responseJson => {
                //.then(response => response.json()) --- folosit pt a obtine jsonul
                alert("Respunsul de la cerere:" + responseJson);
                //let helpersList = [];
                /*responseJson.forEach(username => {
                    //cred ca mai bine setez aici
                    console.log(username)
                    helpersList = [...helpersList, username];
                })*/
                //seteazaHelper(helpersList)//nu cred ca mai are rost chestia asta
                //gen setarea starii cu noii helperi in componenta aia cu top
                seteazaLoading();
                alert("pana aici o mers bine");
            })
            .catch(error => {
                alert("nasol man nu am primit bine topul");
                seteazaLoading();
            })
    };



    const formik = useFormik({
        initialValues: {
            username: localStorage.getItem('user'),
            tip_nevoie: 'Servicii',
            tags: {},
            details: '',
        },
        onSubmit: values => {
            document.getElementById("loader1").style.display = "inline";
            // eslint-disable-next-line no-undef
            let tagValues = _.cloneDeep(tags);
            tagValues.map((tag) => {
                tag.name = tag.text;
                delete tag["id"];
                delete tag["text"];
                return tag;
            })
            if (formik.values.tip_nevoie === "Produse")
                tagValues.map((tag, index) => tag["quantity"] = cantitate[index])
            else
                tagValues.map((tag) => tag["quantity"] = -1)
            tagValues.map((tag) => values.tags[tag.name] = tag.quantity)
            // eslint-disable-next-line no-undef
            let formValues = _.cloneDeep(values)
            delete formValues["tip_nevoie"]
            alert(JSON.stringify(tags))
            alert(JSON.stringify(formValues))
            setTimeout(sendItemsToDB(values), 30000);
            receiveTop();
            seteazaTag(tags);
        }
    });

    const seteazaSugestii1 = (suggest) => {
        setSuggest1(suggest);
    }

    const seteazaHelper = (help) => {
        setHelper(help)
    }
    const formikNevoie = () => {
        let selectedRadio = "";
        let suggestions = cloneDeep(suggest);
        const keys = Object.keys(suggestions);
        if (document.getElementById("selectServiciu").checked) {
             selectedRadio = "Servicii";
        //     keys.forEach((key) => {
        //         if (suggestions[key] === "service") {
        //                 let object;
        //                 object.id=key;
        //                 object.text=key;
        //                 seteazaSugestii1([...suggest1,object]);
        //         }
        //     });
        }
        else {
            selectedRadio = "Produse";
            keys.forEach((key) => {
                if (suggestions[key] === "product") {

                }
            });
        }
        if (formik.values.tip_nevoie !== undefined) {
            if (formik.values.tip_nevoie !== selectedRadio)
                setTags([]);
            formik.values.tip_nevoie = selectedRadio;
        }
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
                        <Tags suggest={suggest1} giveTags={seteazaTag} tags={tags} check={formik.values.tip_nevoie} />
                    </div>
                    <textarea id="descriere_text_box" name="details" onChange={formik.handleChange} />
                    <br />
                    {
                        (formik.values.tip_nevoie === "Produse") ?
                            tags.map((tag) =>
                                <CantitateInput quantity={cantitate} giveQuantity={setCantitate} tag={tag} keys={++count} />) : undefined
                    }
                    <div className="alignRight">
                        <div className="butonSubmit" onClick={formik.handleSubmit} type="submit">
                            Trimite
                            <div id="loader1" className="spinner-border text-danger" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>

                </form>
            </div>) : <ControlledCarousel />/*
            aici tre cred sa bagam componenta la care o facut Tudor in care sa dam la props acei helperi cred : ai dreptate robi
            da de ce nu am dat props tho?
            */}

        </div>
    );
}

export default AlteServicii;
