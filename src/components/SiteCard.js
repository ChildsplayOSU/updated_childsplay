import React from 'react';
import './components.css';


function SiteCard(props){

    return(
        <div className="card">
          <div className={props.card + ' ' + props.cname}>
            <div className="content">
              <h2>01</h2>
              <h3>Card One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
              <a className={props.btn} href="#">Read More</a>
            </div>
          </div>
        </div>
    );

}

export default SiteCard;