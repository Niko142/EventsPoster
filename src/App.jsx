import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './index.scss'
import HomePage from './client/Home'
import Contacts from './client/Contacts'
import AboutInfo from './client/AboutBlock'

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/info' element={<AboutInfo/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
