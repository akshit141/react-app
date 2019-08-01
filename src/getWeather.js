import React, { Component } from 'react';
import axios from 'axios';
import  {getLocation} from './actions/index';
import { connect } from 'react-redux';

class GetWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            city: '',
            type: '',
            lon: '',
            lang: ''
        }

    }

    getPosts = () => {
        let API_KEY = 'a9de0692a16581e5f6d5085ba51777d2';
        let URL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_KEY}`;
        let icon;

        axios.get(URL)
            .then(response => {
                const data = JSON.parse(JSON.stringify(response.data));
                console.log(data);
                this.setState({
                    weather: {
                        city: data.city.name,

                        temp1: data.list[0].main.temp,
                        type1: data.list[0].weather[0].description,
                        spd1: data.list[0].wind.speed,
                        pres1: data.list[0].main.pressure,
                        icon1: data.list[0].weather[0].icon,

                        temp2: data.list[8].main.temp,
                        type2: data.list[8].weather[0].description,
                        spd2: data.list[8].wind.speed,
                        pres2: data.list[8].main.pressure,
                        icon2: data.list[8].weather[0].icon,

                        temp3: data.list[16].main.temp,
                        type3: data.list[16].weather[0].description,
                        spd3: data.list[16].wind.speed,
                        pres3: data.list[16].main.pressure,
                        icon3: data.list[16].weather[0].icon,

                        temp4: data.list[24].main.temp,
                        type4: data.list[24].weather[0].description,
                        spd4: data.list[24].wind.speed,
                        pres4: data.list[24].main.pressure,
                        icon4: data.list[24].weather[0].icon,

                        temp5: data.list[32].main.temp,
                        type5: data.list[32].weather[0].description,
                        spd5: data.list[32].wind.speed,
                        pres5: data.list[32].main.pressure,
                        icon5: data.list[32].weather[0].icon,

                        temp6: data.list[39].main.temp,
                        type6: data.list[39].weather[0].description,
                        spd6: data.list[39].wind.speed,
                        pres6: data.list[39].main.pressure,
                        icon6: data.list[39].weather[0].icon,

                        lat: data.city.coord.lat,
                        lon: data.city.coord.lon

                    }
                })
            })
    }

    handleChange = event => {
        this.setState(
           
            { city: event.target.value }
        );
    }

    handleSelect = event => {
        this.setState(
            { city: event.target.value }
        );
        this.forceUpdate();
        this.getPosts();
    }
    getWeather = position => {
        let long = localStorage.getItem("long");
        console.log(localStorage.getItem("long"))
        let lat = localStorage.getItem("lat");
        console.log(localStorage.getItem("lat"))
        let API_KEY = 'a9de0692a16581e5f6d5085ba51777d2';
        let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`;
        let data;
        let city_name;
        let jsonURL = ''


        axios.get(URL).then(
            response => {
                data = JSON.parse(JSON.stringify(response.data));
                
                city_name = data.city.name;
                console.log(city_name);
                this.setState({
                    city: city_name
                })
            }
        )
        this.getPosts();
    }


    render() {
        console.log(this.state.weather);
        if (this.state.weather) {
            return (
                <div className='container'>
                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter city</b><br/> <input type='text'className="form-inline" onChange={this.handleChange}></input><br/>
                    <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or</b></p>
                    <button onClick={this.getWeather} className="btn btn-info" ><i className="fa fa-map-marker"></i> Get Current Location</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.getPosts}  className="btn btn-success btn-lg" disabled={this.state.city === ''} ><i className="fa fa-cloud" ></i> Get Weather</button><br/><br/>
                    


                    <div className='row '>
                        <div className='col' align='center'>
                            <h3> {this.state.weather.city} </h3> <br />
                            <b>Co-ordinates</b><br/> <b>Lat:</b> {this.state.weather.lat} <b>Long:</b> {this.state.weather.lon} <br />
                            <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon1}@2x.png`} /> <br />
                            Temp: {(this.state.weather.temp1 - 273).toFixed(2)} degree<br />
                            Wind Speed: {this.state.weather.spd1} m/s <br />
                            Pressure: {this.state.weather.pres1} hpa <br />
                            Weather Type : {this.state.weather.type1}<br />

                        </div>
                        <div align='center'>
                            <p><b>Select City</b></p>
                            <select onClick={this.getPosts} onChange={this.handleChange} value={this.state.selectValue}>
                                <option value="" selected disabled hidden>Choose here</option>
                                <option  value="Bengaluru">Banglore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Mysore">Mysore</option>
                                <option value="Delhi">New Delhi</option>
                                <option value="Hyderabad">Hyderabad</option>
                            </select><br/><br/>
                            <b>Add city</b><br/> <input type='text'className="form-inline" onChange={this.handleChange}></input><br/>
                            <button>Add</button>
                        </div>


                    </div>
                    <hr />
                    <div className='row'>
                    &nbsp;&nbsp;&nbsp; <b>Weather Predictions for the week </b>
                    </div>
                    <div className='row' align="center">
                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon2}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp2 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd2} m/s <br />
                        Pressure: {this.state.weather.pres2} hpa <br />
                        Weather Type : {this.state.weather.type2}<br />


                    </div>

                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon3}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp3 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd3} m/s <br />
                        Pressure: {this.state.weather.pres3} hpa <br />
                        Weather Type : {this.state.weather.type3}<br />


                    </div>

                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon4}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp4 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd4} m/s <br />
                        Pressure: {this.state.weather.pres4} hpa <br />
                        Weather Type : {this.state.weather.type4}<br />


                    </div>

                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon5}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp5 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd5} m/s <br />
                        Pressure: {this.state.weather.pres5} hpa <br />
                        Weather Type : {this.state.weather.type5}<br />


                    </div>

                    <div className='col'>
                        <img src={`http://openweathermap.org/img/wn/${this.state.weather.icon6}@2x.png`} /> <br />
                        Temp: {(this.state.weather.temp6 - 273).toFixed(2)} degree<br />
                        Wind Speed: {this.state.weather.spd6} m/s <br />
                        Pressure: {this.state.weather.pres6} hpa <br />
                        Weather Type : {this.state.weather.type6}<br />


                    </div>
                </div>
                </div >



            )
        }
    }

}

const mapStateToProps = state => {
    return {books: state.location};
};


export default connect(mapStateToProps, { getLocation })(GetWeather);