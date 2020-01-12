import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation'

//converted the index-lifecyle file to a hook. AMAZING!
const App = () => {
    const[lat, errorMessage] = useLocation()

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

 