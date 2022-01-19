import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-spring-warmth-gradient grow br3 pa3 ma2 dib bw2 shadow-5' style={{'background-image':'linear-gradient(to bottom right, #faaca8, #fff )'}}>
      <img alt='robots' src={`https://robohash.org/${id}?size=175x175`} />
      <div>
        <h2 style={{'font-family':"fantasy"}}>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
