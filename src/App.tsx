import {
  About,
  Contact,
  Experience,
  Home,
  Nav,
  ScrollToTop,
  ThemeProvider,
} from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Nav />
      <Home />
      <About />
      <Experience />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
