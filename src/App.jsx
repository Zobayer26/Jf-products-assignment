import Banner from "./components/Banner";
import Container from "./components/Container";
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
        <Review />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
