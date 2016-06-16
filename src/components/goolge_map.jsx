import React from "react";
import {GoogleMapLoader, GoogleMap} from "react-google-maps";
class Google_Map extends React.Component {
    render() {
        return (
            <GoogleMapLoader containerElement={<div style={{height: '100%'}}/>}
                             googleMapElement={
                                 <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}/>
                             }/>
        )
    };
}

export default Google_Map;