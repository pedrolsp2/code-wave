import React from "react";
import './index.css';
import { data } from "../../Utils/api";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Persona from '../../Assets/Image/persona.png'

function Index() {

  return (
    <section className="container">
      <section className='index-banner'>
        <span>
          <h1>Surfe na onda da tecnologia <a id="color-text">hoje mesmo</a>!</h1>
          <p>Seja você um entusiasta do desenvolvimento de software, interessado em aprender ciência de dados ou ansioso por mergulhar no mundo do design de interface.</p>
          <Button name='Explorar agora' />
        </span>
      </section>
      <main>

        <h1>Somos uma plataforma <a id="color-text">dedicada ao aprendizado</a> contínuo</h1>

        <section className="about-us">
          <article>
            <div className="new">
              <h2>Novos conhecimentos</h2>
              <p>Comece sua jornada na tecnologia sem mesmo ter conhecimento de nada ainda. Seu portifólio vai aumentar de um nível lindo!</p>
              <small>Você vai dominar tecnologias nunca vistas, com aulas e vídeos didáticos.</small>
              <Button name="Ver mais" />
            </div>
          </article>
          <article>
            <img src={Persona} alt="Pessoa estudando" />
          </article>
        </section>
        <section className="card-section">
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </section>
      </main>
    </section>
  );
}

export default Index;