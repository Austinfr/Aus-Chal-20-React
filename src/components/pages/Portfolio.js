import React from 'react';
import Project from '../Project';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project image="/img/06-server-side-apis-homework-demo.png" title="Weather Forecast" appLink="https://austinfr.github.io/Aus-Chal-6-Weather/" githubLink="https://github.com/Austinfr/Aus-Chal-6-Weather"/>
      <Project image="" title="Project 2" appLink="" githubLink=""/>
      <Project image="" title="Project 3" appLink="" githubLink=""/>
    </section>
  );
}

export default Portfolio;