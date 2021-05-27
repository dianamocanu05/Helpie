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
    const [suggest1, setSuggest1] = useState([]);//cred ca aici punem products sau services
    const [helper, setHelper] = useState([]);

    const [ sugestiiServicii, setSugestiiServicii ] = useState([]);
    const [ sugestiiProduse, setSugestiiProduse ] = useState([]);

    let count = 0;

    //fetch la claudia
    const sendItemsToDB = (values) => {
        //ar cam trebui un body pt json gen ca un body request
        //https://all-db.herokuapp.com/api/v1/requestNeeder
        let urlRequest="http://localhost:8081/api/v1/requestNeeder";
        fetch(urlRequest, {
            method: "POST",
            body: JSON.stringify(values),
            headers:
            {
                "Content-type": "application/json",
                //'Authorization': localStorage.getItem('token')          
            },
        })
            .then(res => res.text())
            .then(res =>{
                console.log("Succes:" + res)
                receiveTop();
            })
            .catch(error => {
                alert("Error:" + error+"\n");
            })
    }

    const seteazaSugestii = (suggest) => {
        setSuggest1(suggest);
    }

    const setSugServ = (sugg) => {
        setSugestiiServicii(sugg);
    }

    const setSugProd = (sugg) => {
        setSugestiiProduse(sugg);
    }

    useEffect(() => {
        //needs
        //https://all-db.herokuapp.com/api/v1/needs
        let urlDB = "http://localhost:8081/api/v1/needs";
        fetch(urlDB)
            .then(status)
            .then(res => res.json())
            .then(resJson => {
                let suggestions = cloneDeep(resJson);
                const items = Object.keys(suggestions);
                let varSugestieServicii = [];
                let varSugestieProduse = [];
                items.forEach((item) => {
                    if (suggestions[item] === "service") {
                        let object = {};
                        object.id = item;
                        object.text = item;
                        varSugestieServicii = [...varSugestieServicii, object];
                    }
                    else {
                        let object = {};
                        object.id = item;
                        object.text = item;
                        varSugestieProduse = [...varSugestieProduse, object];
                    }
                });
                setSugServ(varSugestieServicii);
                setSugProd(varSugestieProduse);
                seteazaSugestii(varSugestieServicii);

            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    //verificare status fetch-uri
    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            // cererea poate fi rezolvată – fulfill
            return Promise.resolve(response)
        } else {
            // cererea a fost refuzată – reject
            return Promise.reject(new Error(response.statusText))
        }
    }

    //fetch la catalin
    
    const receiveTop = () => {
        //https://matching-alg.herokuapp.com/match?user= si aici username-ul
        let urlMatch = "http://localhost:8080/match?user=andrei"
        var helpersList = [];
        fetch(urlMatch,{
            method: 'POST',
            body: JSON.stringify({}),
        })//mai trebuie ceva sa zicem
            .then(response => response.json())// ---l-am folosit pentru a testa daca ii decent fetch-ul
            .then(responseJson => {
                responseJson.helperResponses.forEach(helper => {
                    //cred ca mai bine setez aici
                    console.log(helper)
                    helpersList = [...helpersList, helper];
                })
                seteazaHelper(helpersList);
                //seteazaHelper(helpersList)//nu cred ca mai are rost chestia asta
                //gen setarea starii cu noii helperi in componenta aia cu top
                seteazaLoading();
                alert("pana aici o mers bine");
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
                tagValues.map((tag, index) => tag["quantity"] = parseInt(cantitate[index]))
            else
                tagValues.map((tag) => tag["quantity"] = -1)
            tagValues.map((tag) => values.tags[tag.name] = tag.quantity)
            // eslint-disable-next-line no-undef
            let formValues = _.cloneDeep(values)
            delete formValues["tip_nevoie"]
            alert(JSON.stringify(tags))
            alert(JSON.stringify(formValues))
            sendItemsToDB(formValues);
            seteazaTag(tags);
        }
    });

    const seteazaHelper = (help) => {
        setHelper(help)
    }

    const formikNevoie = () => {
        let selectedRadio = "";
        if (document.getElementById("selectServiciu").checked) {
            selectedRadio = "Servicii";
            seteazaSugestii(sugestiiServicii)
        }
        else {
            selectedRadio = "Produse";
            seteazaSugestii(sugestiiProduse)
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
            </div>) : <ControlledCarousel listHelpers={helper}/>/*
            aici tre cred sa bagam componenta la care o facut Tudor in care sa dam la props acei helperi cred : ai dreptate robi
            da de ce nu am dat props tho?
            */}

        </div>
    );
}

export default AlteServicii;
