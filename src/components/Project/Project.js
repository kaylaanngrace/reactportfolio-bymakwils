import React from 'react';
import Portfolio from '../Portfolio/Portfolio';

function Project(props) {
  const { project } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{project.name}</h1>
      <p>{project.languages}</p>
      <Portfolio project={project.name} />
    </section>
  );
}
export default Project;