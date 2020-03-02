import React from 'react';

const getSeason = (lat, month) => {
  if (month > 3 && month < 10) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  return (
    <h1>
      {season === 'winter' ? 'Burr, it is chilly!' : 'lets hit the beach!'}
    </h1>
  );
};

export default SeasonDisplay;