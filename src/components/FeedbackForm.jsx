import React, { useState,useEffect } from "react";

import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
//import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
 


  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating ,setRating] = useState (4)
  //const navigate = useNavigate();
  const {addFeedback,feedbackEdit, updateData} = useContext(FeedbackContext)

  useEffect(()=>{
   if(feedbackEdit.edit === true){
     setBtnDisabled(false)
     setRating(feedbackEdit.item.rating)
     setText(feedbackEdit.item.text)
   }
  },[feedbackEdit])
  const handleChange = (e) => {
   
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("text needs to be atleast 10");
    } else {
      setBtnDisabled(false);
      setMessage(null);
      
    }
    setText(e.target.value);
   // console.log(e.target.value);
  };
   const handleSubmit = (e)=>{
    e.preventDefault()
      if(text.trim().length >10){
        const newFeedback ={
            text,
            rating
        }
        if(feedbackEdit.edit === true){
   updateData(feedbackEdit.item.id, newFeedback)
        }else{
           addFeedback(newFeedback)
        }
       
      }
      setText("")
     // navigate('/post')
      
   }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Edit Feedback</h2>
        <RatingSelect select = {(rating)=>setRating(rating)} />
        <div className="input-group">
          <input
            placeholder="write a review...."
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
