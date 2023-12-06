import React from 'react';
import './App.css';
import {validate} from "class-validator";

import {reservationJSON} from "./json/reservation";
import {BookingRequest} from "./decorators/reservation-decorator";
import {fullInfo} from "./json/full-info";
import {FullInfoDecoder} from "./decorators/full-info-decorator";
import {buildings} from "./json/buildings";
import {OfficeLocation, OfficeLocationsResponse} from "./decorators/buildings-decorator";

function App() {
    const bookingRequest = new BookingRequest(reservationJSON);

    const fullInfoDecoder = new FullInfoDecoder(fullInfo);
    const officeLocations = new OfficeLocation(buildings.rows[0])

    validate(officeLocations).then(errors => {
        if (errors.length > 0) {
            console.log('validation failed. errors: ', errors);
        } else {
            console.log('validation succeed');
        }
    });

    return (
        <div className="App">
            <h1>Check console</h1>
        </div>
    );
}

export default App;
