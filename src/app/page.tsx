import AboutMe from "./aboutMe";
import Blog from "./blog";
import DevWork from "./devWork";
import Photography from "./photography";
import Projects from "./projects";
import SplashPage from "./splashPage";

export default function Home() {
  return (
      <div className="relative">
        {/* make each page look like a corresponding web page (aka camera menu for photography) */}
        <SplashPage />
        <AboutMe />
        <DevWork />
        <Projects />
        <Photography/>
        <Blog />
      </div>
  );
}
