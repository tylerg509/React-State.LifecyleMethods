import {useState, useEffect} from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    //only want this to be invoked one time. so we will pass an empty array as second argument

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    },[])

    //could return as object
    //return {lat: lat, errorMessage: errorMessage}

    //community leans towards array but if you add to the array it will break code
    return [lat, errorMessage];
    

}
