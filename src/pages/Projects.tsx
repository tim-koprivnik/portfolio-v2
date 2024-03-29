import styles from './Projects.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';
import PageTemplate from '../templates/PageTemplate';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet';
import useFetch from '../hooks/useFetch';
import fastReactPizzaImg from '../assets/fast-react-pizza.png';
import natoursImg from '../assets/natours.png';
import nexterImg from '../assets/nexter.png';
import soundwaveImg from '../assets/soundwave.jpg';
import netflixCloneImg from '../assets/netflixclone.jpg';
import pigGameImg from '../assets/piggame.jpg';
import budgetyImg from '../assets/budgety.png';
import subsidiumImg from '../assets/subsidium.jpg';
import oganiImg from '../assets/ogani.jpg';
import alivioImg from '../assets/alivio.png';
import allbirdsImg from '../assets/allbirds.png';
import somethingDifferentImg from '../assets/something-different.png';
import trilloImg from '../assets/trillo.png';
import crispStudioImg from '../assets/crisp-studio.png';
import covidImg from '../assets/covid-19.jpg';
import portfolioImg from '../assets/portfolio.png';
import forkifyImg from '../assets/forkify.png';
import tmdbImg from '../assets/tmdb.png';
import natoursAppImg from '../assets/natours-app.png';
import ProjectList from '../components/ProjectList';

type Link = {
  type: string;
  url: string;
  icon: string;
};

type Project = {
  name: string;
  image: string;
  description: string;
  links: Link[];
};

type ProjectsData = {
  projects: Project[];
};

const imageMap: { [key: string]: string } = {
  'fast-react-pizza.png': fastReactPizzaImg,
  'natours.png': natoursImg,
  'nexter.png': nexterImg,
  'soundwave.jpg': soundwaveImg,
  'netflixclone.jpg': netflixCloneImg,
  'piggame.jpg': pigGameImg,
  'budgety.png': budgetyImg,
  'subsidium.jpg': subsidiumImg,
  'ogani.jpg': oganiImg,
  'alivio.png': alivioImg,
  'allbirds.png': allbirdsImg,
  'something-different.png': somethingDifferentImg,
  'trillo.png': trilloImg,
  'crisp-studio.png': crispStudioImg,
  'covid-19.jpg': covidImg,
  'portfolio.png': portfolioImg,
  'forkify.png': forkifyImg,
  'tmdb.png': tmdbImg,
  'natours-app.png': natoursAppImg,
};

const Projects: React.FC = () => {
  const [data, isLoading, error] = useFetch<ProjectsData>('../../projects.json');

  if (isLoading) {
    return <p className={styles.apiText}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.apiText}>Error: {error.message}</p>;
  }

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Projects page" />
      </Helmet>
      <Header />
      <PageTemplate
        mainContent={
          <MainContent className={styles.projectsPage}>
            <h1 className={styles.pageTitle}>Projects</h1>
            <p>
              For more, check{' '}
              <a
                className={styles.portfolioLink}
                href="https://github.com/tim-koprivnik"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              .
            </p>
            <ProjectList projects={data?.projects || []} imageMap={imageMap} />
          </MainContent>
        }
      />
      <Footer />
    </>
  );
};

export default Projects;
