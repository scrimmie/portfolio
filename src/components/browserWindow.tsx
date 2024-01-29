import {
  TfiClose,
  TfiDesktop,
  TfiLayoutLineSolid,
  TfiLock,
} from 'react-icons/tfi';

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function BrowserWindow({ children, title }: Props) {
  return (
    <div className='flex h-full w-full flex-col border-2 border-zinc-400 bg-zinc-800'>
      <div className='flex h-7 min-w-full flex-row border-b-2 border-zinc-400 bg-zinc-700'>
        <div className='flex aspect-square w-7 flex-col items-center justify-center border-r border-zinc-400 p-1.5'>
          <TfiClose color='white' />
        </div>
        <div className='flex aspect-square w-7 flex-col items-center justify-center border-r border-zinc-400 p-1.5'>
          <TfiLayoutLineSolid color='white' />
        </div>
        <div className='flex aspect-square w-7 flex-col items-center justify-center border-r border-zinc-400 p-1'>
          <TfiDesktop color='white' />
        </div>
        <div className='flex aspect-square w-full flex-row items-center justify-center pr-12 font-JetbrainsMono text-white'>
          <TfiLock color='white' className='w-5 pr-2' />
          {title}
        </div>
      </div>
      <div className='flex h-full max-h-full overflow-hidden'>{children}</div>
    </div>
  );
}
