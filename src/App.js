import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import AboutPage from "./pages/AboutPage.jsx";
import FeedbacckStatus from "./components/FeedbacckStatus.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import FeedbackIcon from './components/FeedbackIcon.jsx';
import FeedbackList from "./components/FeedbackList.jsx"
import Header from "./components/Header";
import NoMatchFpund from './components/NoMatchFpund.jsx';
import Post from './components/Post.jsx';
//import feedbackData from "./components/data/feedbackData";
//import { useState } from "react";

import { FeedbackProvider } from './context/FeedbackContext.js';

function App() {
  
   
 

   
  return (

    <FeedbackProvider> 
   <FeedbackProvider>

  
    <Router>
    <Header text='Feedback Form'  />
    <div className="container">
     <Routes>
     <Route exact path ='/' element ={<>
     
      <FeedbackForm />
    <FeedbacckStatus />
    <FeedbackList />
     </>} >
       

      </Route>
      
    
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/post/*' element={<Post/>}/>
    <Route path='*' element = {<NoMatchFpund />} />
     
     </Routes>
    
    </div>
    <FeedbackIcon />
    </Router>
    </FeedbackProvider>
    </FeedbackProvider>
   
  );
}

export default App;
