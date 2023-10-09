import "./App.css";
import { HomePage } from "./layouts/Homepage/HomePage";
import { Carousel } from "./layouts/Homepage/components/Carousel";
import { ExploreTopBooks } from "./layouts/Homepage/components/ExploreTopBooks";
import { Heros } from "./layouts/Homepage/components/Hero";
import { LibraryServices } from "./layouts/Homepage/components/LibraryServices";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
