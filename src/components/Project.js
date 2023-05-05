import React from 'react';

function Project(props) {
  return (
    <div style={{
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <a href={`${props.appLink}`}>
      <h3>{props.title}</h3>
      </a>
      <a href={`${props.githubLink}`}>My github</a>
    </div>
  );
}

export default Project;