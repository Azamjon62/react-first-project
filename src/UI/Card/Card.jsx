import React from 'react'
import "./index.scss"

const Card = (props) => {
    // console.log(props);
    
    const {item: {title, date1, date2, description}} = props;

  return (
    <div className="cards">
      <div className="cards__flex">
        <h2>{title}</h2>
        <div className="cards__flex__date">
          <p>{date1}</p>
          |
          <p>{date2}</p>
        </div>
        <p className="cards__flex--p">
            {description}
        </p>
      </div>
    </div>
  );
}

export default Card