import LandingPage from './landingpage';
import picture1 from './images/picture1.png';
import ResponsiveAppBar from './navbar';
import BasicButtons from './components/Button';

function App() {
  return (
    <div>
     <ResponsiveAppBar />
      <LandingPage />
      <BasicButtons />
      <img src={picture1} className="right-side" alt="pictures" />
    </div>
  );
}

export default App;
