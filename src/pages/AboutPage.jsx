import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
     <div className="about">
         <p>this is the about page</p>
         <Link to="/">back to Homepage</Link>
        </div> 
    </Card>
  )
}

export default AboutPage
