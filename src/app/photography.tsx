import BrowserWindow from "../components/browserWindow";
import Image from "next/image";

export default function Photography() {
  return (
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="container w-screen h-screen flex flex-col items-center justify-center p-10 py-16">
        <BrowserWindow title="photography.me">
          <div className="w-full h-full flex flex-row items-center justify-center">
            <div className="p-10 w-full h-full flex flex-row items-center justify-center">
              <Image
                src="/davidDapice.JPG"
                alt="Picture of the author"
                width={380}
                height={380}
              />
            </div>
            <p className="p-10 h-full w-full font-JetbrainsMono text-white text-2xl whitespace-pre-wrap flex flex-col items-center justify-center">   I am a driven, passionate technologist who combines logic and
              discipline with interpersonal skills that power new thinking.
              <br/> <br/>  As far back as I can remember, I&apos;ve had a fascination with how
              things work. My natural curiosity has helped me learn and discover
              <br/><br/>   As a team player, I thrive on collaboration, and have an innate interest in
              the world around me — especially when technology can impact the
              lives of others.
            </p>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
}