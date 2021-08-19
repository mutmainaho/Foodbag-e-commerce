import react from 'React';
import './Home.css';
import '../Nav/nav';
import '../intro/intro';
import '../Interest/interest';
import '../Service/service';
import '../Footer/footer';
import '../Cart/cart'






const Home = () => {
  return (
    <div>
        <Nav />
            <Intro />
            <Interest />
            <Service />
            <Footer />
    </div>
  );
}

export default Home;
