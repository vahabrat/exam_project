import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import s from './Map.module.css'


export class MapContainer extends Component {
  render() {
    return (
        <div className={s.mapWrapper}>
          <Map google={this.props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1></h1>
                </div>
            </InfoWindow>
          </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({apiKey: ('AIzaSyD4LSjkbyCgootniDbv-IZMg5Vk8KPzatY')})(MapContainer)

/*{this.state.selectedPlace.name}*/