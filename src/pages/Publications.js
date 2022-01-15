import React from "react";
import { Container } from "react-bootstrap";
import './pages.css';
import photo1 from './photos/publications1.JPG'


function Publications(){
    return(
        <div>
            <Container>
                {/* Not a huge fan of this picture, maybe find replacement? */}
                <img src={photo1} className='topImg'></img>
            </Container>
            <Container className='section'>
                <h1 className='headerFonts' style={{fontSize: 46}}> Publications </h1>
                <p>A collection of the publications made by our research group.</p>
            </Container>
            <Container className='section'>
                <h2 className='headerFonts' style={{fontSize: 30}} > Reframing Middle School Mathematics Teachers’ TPACK for Teaching A New Computer Science Curriculum: Researcher-Practitioner Partnership, Board Games, and Virtual Teaching Experiences </h2>
                <p>Niess, M., Parham-Mocello, J, Erwig, M. (2021, March). Reframing Middle School Mathematics Teachers’ TPACK for Teaching A New Computer Science Curriculum: Researcher-Practitioner Partnership, Board Games, and Virtual Teaching Experiences. Full paper at the Online Annual Society for Information Technology and Teacher Education (SITE).</p>
                <br></br>
                <h2 className='headerFonts' style={{fontSize: 30}} > Virtually Unplugged: Using Board Games for Online CS Middle School Camps. </h2>
                <p>Parham-Mocello, J., Erwig, M., Niess (2021).  Visual Languages/Human Centered Computing (VL/HCC 2021)</p>
                <br></br>
                <h2 className='headerFonts' style={{fontSize: 30}} > Developing teachers’ knowledge for teaching in virtual contexts: Lessons from the pandemic of 2020-2021.</h2>
                <p> Niess, M.L. & Gillow-Wiles, H. (June, 2021). In Niess & Gillow-Wiles (Eds.) Handbook of Research on Transforming Teachers’ Online Pedagogical Reasoning for Teaching K-12 Students in Virtual Learning Environments.  Hershey, PA: IGI Global. </p>
            </Container>
        </div>
    );
}

export default Publications;