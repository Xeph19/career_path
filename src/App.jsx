import LandingPage from './landingpage';
import picture1 from './images/picture1.png';
import Navigation from './Navigation';
import BasicButtons from './components/Button';

function App() {
  return (
    <div>
     <Navigation />
      <LandingPage />
      <BasicButtons />
      <img src={picture1} className="right-side" alt="pictures" />
    </div>
  );
}

export default App;
