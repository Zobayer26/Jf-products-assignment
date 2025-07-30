import About from "./components/About";
import Add from "./components/Add";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Customer from "./components/Customer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Review from "./components/Reveiw";
import { AgriProductData, LandScapeData } from "./data/data";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Container>
        <Products heading="Agricultural Products" data={AgriProductData} />
        <Products heading="Landscape Products" data={LandScapeData} />
        <Customer />
        <About />
      </Container>
      <Add />
      <Container>
        <Review />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
