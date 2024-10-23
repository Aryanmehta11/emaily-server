// 1) Import ReactDOM library
import 'materialize-css/dist/css/materialize.min.css'
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import App from "./components/App";
import {thunk} from 'redux-thunk'
import reducers from "./reducers";
//Development Only Axios Helpers
import axios from 'axios'
window.axios=axios

const store=createStore(reducers,{},applyMiddleware(thunk))
 
// 3) Get a reference to the div with ID root
const el = document.getElementById("root");
 
// 4) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
 
// 5) Show the component on the screen
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
