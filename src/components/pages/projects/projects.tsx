import "./projects.css";

import Slider from "../../slider/slider";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      title: "AMAZON",
      img: "/AMAZON_HIGH.png",
      demo: "https://amazonprime-tau.vercel.app/",
      github: "https://github.com/MayconDS/amazonprime",
      description:
        "Clone da interface da Amazon Prime desenvolvido em ReactJS, afins de praticar a consulta em Api",
    },
    {
      demo: "https://clone-netflix-mayconds.vercel.app",
      github: "https://github.com/MayconDS/Clone-Netflix",
      title: "NETFLIX",
      img: "/NETFLIX_HIGH.png",
      description:
        "Clone da interface da Netflix desenvolvido em ReactJS, afins de praticar a consulta em Api",
    },
    {
      title: "NOOT",
      img: "/NOOT_HIGH.png",
      demo: "https://nootgames.vercel.app",
      github: "https://github.com/MayconDS/nootgames",
      description:
        "Landing page desenvolvida em ReactJS como desafio para vaga de emprego",
    },
    {
      demo: "https://newsound.vercel.app",
      github: "https://github.com/MayconDS/Clone-Spotify",
      title: "SPOTIFY",
      img: "/spotify_1.png",
      description:
        "Clone da plataforma Spotify desenolvida em ReactJS, sendo possivel fazer buscas por musicas, artistas, albums, playlists. E reproduzir previa de 30 segundos da música",
    },
    {
      demo: "https://github-viewer-peach.vercel.app",
      github: "https://github.com/MayconDS/githubViewer",
      title: "GITHUB",
      img: "/github_1.png",
      description:
        "Desenvolvido utilizando ReactJS, sendo possivel ver informações de um perfil e seus repositorios GitHub",
    },

    {
      demo: "https://quizapp-brown.vercel.app",
      github: "https://github.com/MayconDS/quizapp",
      title: "QUIZ",
      img: "/quiz_1.png",
      description:
        "Quiz Desenvolvido utilizando ReactJS, afins de praticar o uso do Context",
    },

    {
      demo: "https://todo-list-mayconds.vercel.app",
      github: "https://github.com/MayconDS/todo-list",
      title: "TODOLIST",
      img: "/todolist_1.png",
      description:
        "TODO-LIST Desenvolvido utilizando ReactJS, onde você pode colocar suas tarefas, e depois de concluir-la marcar como concluida",
    },
    {
      demo: "https://landing-trafalgar.vercel.app",
      github: "https://github.com/MayconDS/landing-trafalgar",
      title: "TRAFALGAR",
      img: "/TRAFALGAR_HIGH.png",
      description: "Landing Page Desenolvida em ReactJS",
    },
    {
      demo: "https://weatherapp-mayconds.vercel.app/weatherapp-mayconds.vercel.app",
      github: "https://github.com/MayconDS/weatherapp",
      title: "WEATHER",
      img: "/WEATHER_HIGH.png",
      description:
        "Desenvolvido utilizando ReactJS, onde é possivel obter informações Meteorologicas da sua cidade",
    },
    {
      demo: "https://youtubeclone-chi.vercel.app",
      github: "https://github.com/MayconDS/Youtube-clone",
      title: "YOUTUBE",
      img: "/youtube_1.png",
      description:
        "Clone da plataforma YouTube Desenvolvido utilizando ReactJS, afins de conhecer a Api do Youtube, o App permiti a busca por videos e também possibilita assistir ao video",
    },
  ];

  return (
    <div id="projects" className="projects">
      <div className="light"></div>
      <div className="container">
        <Slide direction="up" className="animation">
          <h1>PROJECTS</h1>
        </Slide>

        <Slider projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
