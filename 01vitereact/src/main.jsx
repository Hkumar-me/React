import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



const reactElement = React.createElement(
  "a", 
  {
  href:"https://www.youtube.com/", 
  target:"_blank"
  },
  "click me to visit YT"
)

const reactElement2 = (
  <a href="https://www.youtube.com/">Click to visit YT</a>
)

ReactDOM.createRoot(
  document.getElementById('root'))
  .render(
    // reactElement2
    reactElement
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
