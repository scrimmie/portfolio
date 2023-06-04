import {
  TfiClose,
  TfiDesktop,
  TfiLayoutLineSolid,
  TfiLock,
} from "react-icons/tfi";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function BrowserWindow({ children, title }: Props) {
  return (
    <div className="container h-full w-full bg-zinc-800 border-zinc-400 border-2 flex flex-col">
      <div className="flex flex-row bg-zinc-700 h-7 min-w-full border-zinc-400 border-b-2">
        <div className="aspect-square w-7 border-zinc-400 border-r flex flex-col items-center justify-center p-1.5">
          <TfiClose color="white" />
        </div>
        <div className="aspect-square w-7 border-zinc-400 border-r flex flex-col items-center justify-center p-1.5">
          <TfiLayoutLineSolid color="white" />
        </div>
        <div className="aspect-square w-7 border-zinc-400 border-r flex flex-col items-center justify-center p-1">
          <TfiDesktop color="white" />
        </div>
        <div className="aspect-square w-full flex flex-row items-center justify-center pr-12 font-JetbrainsMono text-white">
          <TfiLock color="white" className="pr-2 w-5"/>
          {title}
        </div>
      </div>
      <div className="flex max-h-full h-full overflow-hidden">
      {children}
      </div>
    </div>
  );
}
