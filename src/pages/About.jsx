import React from "react";

const About = () => {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Sobre Nosotros</h1>
      <p className="text-lg text-slate-800">
        Esta página fue desarrollada como parte del{" "}
        <strong>Learning Camp React</strong> de <strong>Rootstrap</strong>, una
        iniciativa diseñada para acercar nuevas tecnologías a personas fuera de
        la empresa mediante instancias de aprendizaje intensivo.
      </p>
      <p className="text-lg text-slate-800">
        El programa se llevó a cabo de mayo a septiembre de 2024, abarcando
        varios conceptos claves del desarrollo web, incluyendo{" "}
        <strong>
          HTML, CSS, Git, Github, Javascript (ECMA 6), VITE, React JS
        </strong>{" "}
        y <strong>Tailwind</strong>.
      </p>
      <p className="text-lg text-slate-800">
        Agradezco a Rootstrap por brindarnos un espacio de colaboración y
        aprendizaje continuo, que nos ayuda en nuestro crecimiento profesional.
      </p>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Sobre mi</h2>
      <p className="text-lg text-slate-800">
        Soy Gabriela Ascione de Montevideo, Uruguay. Graduada en Ingeniería
        Audiovisual y con un máster especializado en UX/UI, cuento con una
        sólida base del mundo audiovisual, las nuevas tecnologías y el
        desarrollo web. Mi formación me ha permitido comprender en profundidad
        los aspectos estéticos y funcionales de los medios digitales.
      </p>
    </div>
  );
};

export default About;
