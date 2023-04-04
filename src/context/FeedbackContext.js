import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=> {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text:'this is test 1',
            rating: 2

        },
        {
            id: 2,
            text:'this is test 2',
            rating: 3

        },
        {
            id: 3,
            text:'this is test 3',
            rating: 4

        }
    ])


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
      })
    
     // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

     
      
 // for deleting data
    const deleteItem = (id)=>{
        console.log("from app",id)
        if(window.confirm('Are you sure you want to delete')){
         setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }
 

    //for adding data

    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        
      }

        //for update data

    const updateData = (id, upData)=>{
        setFeedback(feedback.map((item)=> (item.id === id? {...item, ...upData}:item ))
       )
        
      }



   return <FeedbackContext.Provider value={{
    feedback, 
    deleteItem,
    addFeedback,
    editFeedback,
    feedbackEdit,updateData
   
    }}>
        {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext