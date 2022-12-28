
import './App.css';

import React,{ useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=> {
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} country="in" pageSize={12} category="general" key="general"/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} country="in" pageSize={12} category="business" key="business"/>}> </Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} country="in" pageSize={12} category="entertainment" key="entertainment"/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} country="in" pageSize={12} category="health" key="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} country="in" pageSize={12} category="science" key="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} country="in" pageSize={12} category="sports" key="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} country="in" pageSize={12} category="technology" key="technology"/>}></Route>
          </Routes>
        </Router>
        
      </div>
    )
  }
  export default App


