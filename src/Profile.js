import React, { Component } from "react";
import styles from "./styles/Profile.css"
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import { Button } from '@material-ui/core';


export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            surname: "",
            address: "",
            phone_number: "",
            maxDistanceAccepted: "",
            startHour: "",
            finalHour: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
            success: false
        });
        this.setState({
            error: false
        });
        var url = 'https://users-bd.herokuapp.com/api/users/update';
        var request = new Request(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                name: this.state.name,
                surname: this.state.surname,
                address: this.state.address,
                phone_number: this.state.phone_number,
                maxDistanceAccepted: this.state.maxDistanceAccepted,
                startHour: this.state.startHour,
                finalHour: this.state.finalHour
            })
        });
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
        if (data.success == 1) {
            this.setState({
                success: true
            });
        }
        else if (data.message != "Database connection errror") {
            this.setState({
                error: true
            });
            this.setState({
                errorMessage: data.message
            });
        }
        else {
            this.setState({
                error: true
            });
            this.setState({
                errorMessage: "Data already exists or input is incorrect"
            });
        }
    }

    render() {
        return (
            <form id="paginaProfile">

                <div id="date">
                    <div class="detalii">
                        <div class="spatiuPr"> Nume: </div>
                        <div>
                            <input
                                name="name"
                                placeholder="Nume"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            /> </div>
                    </div>
                    <div class="detalii">
                        <div class="spatiuPr"> Prenume: </div>
                        <div>
                            <input
                                name="surname"
                                placeholder="Prenume"
                                value={this.state.surname}
                                onChange={this.handleChange}
                                required
                            /> </div>
                    </div>
                    <div class="detalii">
                        <div class="spatiuPr"> Distanta maxima: </div>
                        <div>
                            <input
                                type="number"
                                name="maxDistanceAccepted"
                                placeholder="Distanta maxima"
                                value={this.state.maxDistanceAccepted}
                                onChange={this.handleChange}
                                required
                            /> </div>
                    </div>
                    <div class="detalii">
                        <div class="spatiuPr"> Adresa: </div>
                        <div>
                            <input
                                type="address"
                                name="address"
                                placeholder="Adresa"
                                value={this.state.address}
                                onChange={this.handleChange}
                                required
                            /> </div>
                    </div>
                    <div class="detalii">
                        <div class="spatiuPr"> Telefon: </div>
                        <div>
                            <input
                                type="tel"
                                name="phone_number"
                                placeholder="+40700000000"
                                value={this.state.phone_number}
                                onChange={this.handleChange}
                                required
                            /> </div>
                    </div>

                </div>

                <div id="descriere" class="epilepsy">

                    <div id="disponibilitate">
                        <p> Cand pot ajuta? </p>
                        <input
                                type="time"
                                name="startHour"
                                value={this.state.startHour}
                                onChange={this.handleChange}
                                required
                            /> - <input
                            type="time"
                            name="finalHour"
                            value={this.state.finalHour}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    {this.state.success ? <h5  id="successProfile" className="center" style={{color: "green"}}>Account updated</h5> : <h5 id="successProfile"></h5>}
                {this.state.error ? <h5  id="failProfile" className="center" style={{color: "red"}}>{this.state.errorMessage}</h5> : <h5 id="failProfile"></h5>}
                    <div id="centerx2Profile">
                        <Button onClick={this.handleSubmit} type="button" class="butoaneProfile" variant="contained" color="primary" disableElevation>
                            Salveaza Profil
                        </Button>
                        <a href="Statistics" class="butoaneProfile"> Statistics </a>
                    </div>

                </div>

            </form>

        )
    }
}