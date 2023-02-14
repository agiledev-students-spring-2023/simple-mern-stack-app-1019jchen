import { Link } from 'react-router-dom'
import './AboutUs.css'
import image from './photo.jpg'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>About Me: James Chen!</h1>
      <p>Hi! I'm James. 
        I'm a dynamic and dedicated individual who is pursuing a dual degree in Computer Science and Finance at New York University. 
        I am a talented student and demonstrate my passion for learning and my ability to excel in multiple areas.</p>
      <p>
      I am also an incoming Software Engineering Intern at McDonald's Corporation, where I will have the opportunity to apply my skills and knowledge to real-world projects and gain valuable industry experience. 
      I am an exceptional communicator and problem solver, and I've already demonstrated my abilities through my work as a TA for Graduate Statistics at Stern and as a Research Assistant in Cryptocurrency and Decentralized Finance.
      </p>
      <p>
      In my free time, I enjoy skiing, exercising, and listening to music. I am also a foodie who loves trying new foods and is always on the lookout for his next culinary adventure. 
      </p>
      <div>
      <img style={{ width: "20%", height: "20%" }} src={image} alt="My photo" />
      </div>
          
        
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
