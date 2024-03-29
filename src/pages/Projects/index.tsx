import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import Main from '../../components/Main';
import ProjectItem from '../../components/ProjectItem';
import trailChasers from '../../assets/images/tinified/trailchasers.png';
import budgetTracker from '../../assets/images/tinified/budgettracker.png';
import dono from '../../assets/images/tinified/dono.png';
import oneWorldAcademy from '../../assets/images/tinified/oneworldacademy.png';
import teamBase from '../../assets/images/tinified/teambase.png';
import sickFits from '../../assets/images/tinified/sickFitsHomePage.png';
import './style.scss';

const Projects = () => {
  const iconArray = [
    'devicon-html5-plain-wordmark',
    'devicon-javascript-plain',
    'devicon-python-plain',
    'devicon-java-plain-wordmark',
    'devicon-css3-plain',
    'devicon-sass-plain',
    'devicon-mysql-plain',
    'devicon-mongodb-plain',
    'devicon-graphql-plain',
    'devicon-typescript-plain',
    'devicon-react-original-wordmark',
    'devicon-nextjs-original'
  ];

  return (
    <div>
      <Main>
        <GridContainer className='grid__proj'>
          <GridItem id='proj-header'>
            <h1>Projects</h1>
          </GridItem>
          <GridItem id='projects'>
            <p className='note'>*Hover over images for links and details*</p>

            <div className='projects__container'>
              <ProjectItem
                projNum={1}
                title={'Dono: Charity Trend'}
                desc={
                  'Dono is a social media decluttered of the normal social interactions and focuses on charities and giving back. Made with MERN stack, Socket.io, Material UI, and Cloudinary.'
                }
                image={dono}
                github={'https://github.com/abdulhakeemdahir/dono-application'}
                liveUrl={'https://dono-application.herokuapp.com/'}
              />
              <br />
              <ProjectItem
                projNum={2}
                title={'One World Academy LMS'}
                desc={
                  'A custom learning management system that allows you to teach your way. Built with Express, Sequelize, Bootstrap, and Handlebars.'
                }
                image={oneWorldAcademy}
                github={'https://github.com/TaaniBravo/One-World-Academy'}
                liveUrl={'https://oneworldacademy.herokuapp.com/'}
              />
              <br />
              <ProjectItem
                projNum={3}
                title={'Trail Chasers Hiking App'}
                desc={
                  'A fun hike finding app that allows you to search for hikes in any location and then finds a route for you to picked hike. Made with HTML, Bulma, OpenWeatherMap, Google Maps, and Hiking Project API'
                }
                image={trailChasers}
                github={'https://github.com/TaaniBravo/Trail-Chaser-Hiking-App'}
                liveUrl={
                  'https://taanibravo.github.io/Trail-Chaser-Hiking-App/'
                }
              />
              <br />
              <ProjectItem
                projNum={4}
                title={'TeamBase: Employee Directory'}
                desc={
                  'A fun and simple employee directory. Made with React and Random Employee API'
                }
                image={teamBase}
                github={'https://github.com/TaaniBravo/19-Employee-Directory'}
                liveUrl={'https://teambase-directory.herokuapp.com/'}
              />
              <br />
              <ProjectItem
                projNum={5}
                title={'IndexDB Budget Tracker'}
                desc={
                  "A online and offline budget tracker that allows the user to always update their budget. Focus was the practice of using the IndexDb on client's browser."
                }
                image={budgetTracker}
                github={
                  'https://github.com/TaaniBravo/Online-Offline-Budget-Trackers'
                }
                liveUrl={'https://on-n-offline-budget.herokuapp.com/'}
              />
              <br />
              <ProjectItem
                projNum={6}
                title={'Sick Fits Ecommerce Site'}
                desc={
                  'A demonstrative ecommerce using Keystone TypeScript backend, Next.js, GraphQL, and Stripe API. \n NOTE: Live URL does not work because of limitations of free deployment.'
                }
                image={sickFits}
                github={'https://github.com/TaaniBravo/Sick-Fits'}
                liveUrl={'https://fake-supreme.herokuapp.com/'}
              />
            </div>
          </GridItem>
          <GridItem id='skillset'>
            <div className='skillset__container'>
              <h2 className='lang__header'>Current Languages</h2>
              <br />
              <div className='sub-container'>
                <ul className='language__icons'>
                  {iconArray.map((icon, index) => (
                    <li key={index}>
                      <i className={icon}></i>
                    </li>
                  ))}
                </ul>
              </div>
              <br />
              <h4>Currently working towards...</h4>
              <div className='sub-container'>
                <ul>
                  <li>Domain Driven Design</li>
                  <li>Data Structure Best Practices.</li>
                  <li>Test Driven Development</li>
                </ul>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </Main>
    </div>
  );
};

export default Projects;
