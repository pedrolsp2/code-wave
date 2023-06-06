import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../Utils/api';

function Curso() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [exist, setExist] = useState(false);

  useEffect(() => {
    const fetchCourse = () => {
      const selectedCourse = data.find((item) => item.id === Number(id));
      if (selectedCourse) {
        setCourse(selectedCourse);
      } else {
        setExist(true);
      }
    };

    fetchCourse();
  }, [id]);

  if (exist) {
    return <p>Não existe o curso {id}</p>;
  }

  if (!course) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Curso {id}</h1>
      <h1>{course.name}</h1>
      <h1>{course.price}</h1>
      <h1>{course.newPrice}</h1>
      <h1>{course.url}</h1>
      <h1>{course.author}</h1>
      <h1>{course.cover}</h1>
      <h1>{course.description}</h1>
      <h1>{course.about}</h1>
      <h1>{course.assessment}</h1>
      <h1>{course.n_assessment}</h1>
    </div>
  );
}

export default Curso;
