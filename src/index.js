import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

const theme = createMuiTheme({
  palette: {
     primary: {
        light: 'rgb(255, 113, 181)',
        main: 'rgb(255, 84, 167)',
        dark: 'rgb(255, 113, 181)'
     },
     secondary: {
       main: 'rgb(255, 113, 181)',
       dark: 'rgb(255, 113, 181)',
       light: 'rgb(255, 113, 181)'
     },
  },
  typography: { 
     useNextVariants: true
  }
});

ReactDOM.render(
  <MuiThemeProvider theme = { theme }>
  <DndProvider backend={HTML5Backend}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DndProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
