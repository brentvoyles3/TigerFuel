// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import "../App.css"
import tiger from "../tiger.jpeg"
 
const Home = () => {
    return (
        <div className="landingBody">
            <div className="picContainer">
                <img src={tiger} className = "tigger"></img>
            </div>
             <div className="landingContainer">
        <article>
          <h1>What is Tiger Fueling? </h1>
Chat GPT BS: In the world of innovation and collaboration, the story of two ambitious individuals—one armed with a Computer Science degree from the University of Georgia (UGA) and the other pursuing an MBA at Clemson University—stands out.
This dynamic duo has combined their unique skill sets to make waves in the marine industry, showcasing the power of interdisciplinary collaboration.
The Tech Whiz from UGA:
Meet Brent, a UGA graduate with a passion for technology and a mind wired for problem-solving. Armed with a degree in Computer Science, Brent honed their skills in programming, data analysis, and artificial intelligence during their time at UGA. The foundation laid at UGA provided the technical expertise that would become crucial in the development of cutting-edge solutions for the marine industry.
The Business Mind from Clemson:
Enter Rivers, an MBA student at Clemson University, equipped with a keen business acumen and a strategic mindset. Sarah's journey at Clemson exposed her to the intricacies of business management, finance, and entrepreneurship. This diverse skill set would complement Brent's technical prowess, forming a powerhouse team ready to tackle the challenges of the marine industry.
Forging a Partnership
Their paths crossed at an industry networking event, where they discovered a shared vision for revolutionizing the marine sector. Recognizing the potential of combining technology with business acumen, Brent and Rivers decided to join forces. The collaboration between a UGA Computer Science graduate and a Clemson MBA student was born, breaking down traditional silos and embracing a holistic approach to problem-solving.
Innovations in the Marine Industry:
The duo's first major project aimed to streamline logistics and enhance efficiency in marine transportation. Leveraging Brent's programming skills, they developed a sophisticated algorithm that optimized shipping routes, reducing fuel consumption and minimizing environmental impact.
        </article>
        </div>        
        </div>
    );
};
 
export default Home;