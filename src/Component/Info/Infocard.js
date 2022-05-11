import React from 'react';

const Infocard = ({img, cardTitle, cardInfo, bgClass}) => {
    
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
  <figure className='pl-5'>
      <img src={img} alt="Album"/></figure>
  <div class="card-body text-white">
    <h2 class="card-title">{cardTitle}</h2>
    <p>{cardInfo.city} {cardInfo.phone} {cardInfo.email} <br />
    {cardInfo.division} {cardInfo.github} <br />
    {cardInfo.linkedin}
    </p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
    );
};

export default Infocard;