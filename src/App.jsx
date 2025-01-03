import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './index.scss'
import HomePage from './client/Home'
import Contacts from './client/Contacts'

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
