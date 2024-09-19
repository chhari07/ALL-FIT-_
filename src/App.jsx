import About from "./About";

import Home from "./Home";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import GoToTop from "./components/GoToTop";
import Workout from "./Workout";
import Backtoroot from "./Backtoroot";
import Blog1 from "./Blog1";
import Upcomings from "./Upcomigs";

import Chatbot from "./Chatbot";
import Yoga from "./Yoga";
import Mediation from "./Mediation";
import Mental from "./Mental";
import GoodFood from "./Good_Food";
import AyurvedicFitnessPlan from "./AyuredicFitnessPlans";
import Yogawith from "./Yogawith";
import Indiandance from "./Indiandance";
import MindfFulness from "./MindfFulness";
import AcientIndia from "./AcientIndia";
import SeasonalWorkout from "./SeasonalWorkout";
import LocaIingredients from "./LocaIingredients";
import Interactive from "./Interactive";
import Historical from "./Historical";
import Cultural from "./Cultural";
import Traditional from "./Traditional";
import IndianMythology from "./IndianMythology";
import Dashboard from "./Dashboard";
import Login from "./login";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/backtoroot" element={<Backtoroot />} />
          <Route path="/upcomigs" element={<Upcomings />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/yoga" element={<Yoga/>}/>
          <Route path="/mediation" element={<Mediation/>}/>
          <Route path="/mentalhealth" element={<Mental/>}/>
          <Route path="/goodfood" element={<GoodFood/>}/>
          <Route path="/Ayurvedic" element={<AyurvedicFitnessPlan/>}/>
          <Route path="/YogawithAncient" element={<Yogawith/>}/>
          <Route path="/indianDance" element={<Indiandance/>}/>
          <Route path="/MindfulnessandMeditation" element={<MindfFulness/>}/>
          <Route path="/AncientIndian" element={<AcientIndia/>}/>
          <Route path="/SeasonalWorkout" element={<SeasonalWorkout/>}/>
          <Route path="/InteractiveBhanjan" element={<Interactive/>}/>
          <Route path="/CulturalWorkshops" element={<Cultural/>}/>
          <Route path="/IndianMythology" element={<IndianMythology/>}/>
          <Route path=" /Dashboard" element={<Dashboard/>}/>
           
          
          
       
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
