import React, { useEffect, useState } from 'react';
import ProjectDescription from './ProjectDescription';
import ProjectDetailHero from './ProjectDetailHero';
import { useParams } from 'react-router-dom';
import { client } from '../../client';

const ProjectDetail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <ProjectDetailHero data={detail} />
      <ProjectDescription data={detail} />
    </>
  );
};

export default ProjectDetail;
