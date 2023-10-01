import {
  About,
  Contact,
  Experience,
  Home,
  Nav,
  ThemeProvider,
} from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <Nav />
      <Home />
      <About />
      <Experience />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
