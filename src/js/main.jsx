import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <Card props = {
      imgURL: imgURL: "https://placehold.co/600x400", 
      imgAlt: 'Placehold',
      title
      } />
  </React.StrictMode>,
)
