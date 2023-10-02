import {
  About,
  Contact,
  Experience,
  Home,
  Nav,
  ScrollToTop,
  ThemeToggle,
  ThemeProvider,
} from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <div className="flex flex-col justify-center items-center">
        <Nav />
        <ThemeToggle />
      </div>
      <Home />
      <About />
      <Experience />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
