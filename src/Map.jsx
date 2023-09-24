import React from 'react'

const Map = () => {
  return (
    <>
      <section>
        <div className="map">
            Regional/City  Offers
        </div>
        <iframe    
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.7194027002142!2d74.28909531448542!3d31.61414764967008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c68eeecd0c9%3A0xa49d14fda0937e9a!2sLahore%20Metro%20Bus%20System%2C%20Shahdara%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1676686058698!5m2!1sen!2s" 
           width="100%"
           height="250" 
           style={{border:0}} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
        </iframe>
     </section>
    </>
    
  )
}

export default Map
