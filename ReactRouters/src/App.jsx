
import Headers from './components/Headers/Headers'
import Footers from './components/Footers/Footers'
import {Outlet} from 'react-router-dom'



function App() {

  return (
    <>
    <Headers />
    <Outlet />
    <Footers />
    </>
  )
}

export default App
