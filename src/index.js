import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import './App.css';

import { ThemeProvider } from 'styled-components';
import theme from './Theme'

ReactDOM.render(<App />, document.getElementById("root"));
