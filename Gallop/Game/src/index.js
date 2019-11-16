import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom'
import App from "./components/App"
import { CookiesProvider } from 'react-cookie';





ReactDOM.render(<CookiesProvider><BrowserRouter><App/></BrowserRouter></CookiesProvider>, document.getElementById("root"));
