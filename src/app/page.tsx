import AboutMe from "./aboutMe";
import Blog from "./blog";
import DevWork from "./devWork";
import Projects from "./projects";
import SplashPage from "./splashPage";

export default function Home() {
  return (
      <div className="relative">
        <SplashPage />
        <AboutMe />
        <DevWork />
        <Projects />
        <Blog />
      </div>
  );
}
