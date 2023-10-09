import "./App.css";
import { Carousel } from "./layouts/Homepage/Carousel";
import { ExploreTopBooks } from "./layouts/Homepage/ExploreTopBooks";
import { Heros } from "./layouts/Homepage/Hero";
import { LibraryServices } from "./layouts/Homepage/LibraryServices";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </div>
  );
}

export default App;
