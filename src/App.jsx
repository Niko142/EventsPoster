import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './index.scss'
import HomePage from './client/Home'
import Contacts from './client/Contacts'
import InfoBlock from './client/Information'

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/info' element={<InfoBlock/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
