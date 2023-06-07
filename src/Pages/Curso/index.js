import React, { useState, useEffect } from 'react';
import './curso.css'
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
      <section className='container-info-cursos'>
        <section className='about-courso'>    
        <h1 className='pag'>Cursos &#10095; Programação &#10095; <span id='color-text'>{course.name}</span></h1>
        <h1 className='title'>{course.name}</h1>
        <h1>{course.author}</h1>
        <h1>{course.description}</h1>
        <h1>{course.about}</h1>
        <h1>{course.assessment}</h1>
        <h1>{course.n_assessment}</h1></section>
        <aside>
          <img src={course.cover} alt="Capa do curso "/>
          <div className='price-curso'>
              <h2>R$ {course.newPrice.toFixed(2)}</h2>
              <small><s>R$ {course.price.toFixed(2)}</s></small>
          </div>
        </aside>

      </section>
    </div>
  );
}

export default Curso;
