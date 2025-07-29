import Banner from "./components/Banner";
import Container from "./components/Container";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { AgriProductData, LandScapeData } from "./data/data";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Container>
        <Products heading="Agricultural Products" data={AgriProductData} />
        <Products heading="Landscape Products" data={LandScapeData} />
      </Container>
    </div>
  );
};

export default App;
