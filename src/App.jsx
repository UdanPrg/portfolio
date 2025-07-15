import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub,
  faLinkedin
 } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faTwitter, faFontAwesome, faGithub, faLinkedin);

function Wrapper({ children }) {
  return (
    <main className="flex flex-row items-center justify-center h-[var(--main-height)] bg-gray-100">
      <Sidebar />
      <div className="flex-1 h-full bg-gray-100 overflow-y-auto">
        <div>
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Home />
            </Wrapper>
          }
        />
        <Route
          path="/about"
          element={
            <Wrapper>
              <About />
            </Wrapper>
          }
        />
        <Route
          path="*"
          element={
            <Wrapper>
              <NotFound />
            </Wrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
