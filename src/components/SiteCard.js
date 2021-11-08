import React from 'react';
import './components.css';


function SiteCard(props){

    return(
        <div className="card">
          <div className={'box' + ' ' + props.cname}>
            <div className="content">
              {/* Increase icon size? */}
              <h2>{props.icon}</h2>
              {/* Could use icons here, need to try and get them bigger */}
              <h3>{props.title}</h3> 
              <p>{props.description}</p>
              <a className={props.btn} href={props.link}>Read More</a>
            </div>
          </div>
        </div>
    );

}

export default SiteCard;