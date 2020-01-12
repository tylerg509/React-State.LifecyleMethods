import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//converted the index-lifecyle file to a hook. AMAZING!
const App = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    //only want this to be invoked one time. so we will pass an empty array as second argument
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    },[])

    let content;
    if(errorMessage){
    content = <div>Error: {errorMessage}</div>
    } else if (lat) {
        content = <SeasonDisplay lat={lat}/>
    } else {
        content= <Spinner message="Please accept location request"/>;
    }

    return content;
}



ReactDOM.render(<App />, document.querySelector('#root'))

 