
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import ContactUs from './components/ContactUs';
import About from './components/About/About';
import Project from './components/projects/Project';
import UserProfile from './components/userprofiles/UserProfile';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Project/>
        <UserProfile/>
        <ContactUs/>
        <Footer/>
    </div>
  );
}

export default App;
