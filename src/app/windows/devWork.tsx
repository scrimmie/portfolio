import BrowserWindow from '../../components/browserWindow';

export default function DevWork() {
  return (
    <div className='top-0 flex h-screen w-screen flex-col items-center justify-center bg-transparent'>
      <div className='flex h-screen w-screen flex-col items-center justify-center px-20 py-20'>
        <BrowserWindow title='david.dev'>
          <div className='flex h-full w-full flex-row items-start justify-start overflow-scroll bg-black bg-opacity-50 bg-clip-padding backdrop-blur-md backdrop-filter'>
            <div className='w-1/2 rounded-lg p-8'>
              <div className='mb-4'>
                <span className='text-green-500'>
                  david@davids-macbook-pro:
                </span>
                <span className='text-white'>~$</span>
                <span className='md:inline-block hidden'>&nbsp;</span>
                <span className='text-gray-300'> ls languages</span>
              </div>

              <ul className='mb-4 grid grid-cols-2 text-green-500'>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>HTML</li>
                <li>Golang</li>
                <li>CSS</li>
                <li>Java</li>
                <li>C</li>
              </ul>

              <div className='mb-4'>
                <span className='text-green-500'>
                  david@davids-macbook-pro:
                </span>
                <span className='text-white'>~$</span>
                <span className='md:inline-block hidden'>&nbsp;</span>
                <span className='text-gray-300'> ls technologies</span>
              </div>
              <ul className='mb-4 grid grid-cols-2 text-green-500'>
                <li>React</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>React Native</li>
                <li>Ionic</li>
                <li>TailwindCss</li>
                <li>MaterialUI</li>
                <li>Vite</li>
                <li>FastAPI</li>
                <li>Temporal</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>NoSQL</li>
                <li>Redis</li>
              </ul>
              <div className='mb-4'>
                <span className='text-green-500'>
                  david@davids-macbook-pro:
                </span>
                <span className='text-white'>~$</span>
                <span className='md:inline-block hidden'>&nbsp;</span>
                <span className='text-gray-300'> ls experience</span>
              </div>
              <ul className='mb-4 grid grid-cols-2 text-green-500'>
                <li>Trava Security</li>
                <li>Lula Inc.</li>
                <li>Comcast Corporation</li>
                <li>VyB Technologies, LLC</li>
                <li>SIG</li>
              </ul>
            </div>
            <div className='w-1/2 rounded-lg p-8'>
              <div className='mb-4'>
                <span className='text-green-500'>
                  david@davids-macbook-pro:
                </span>
                <span className='text-white'>~$</span>
                <span className='md:inline-block hidden'>&nbsp;</span>
                <span className='text-gray-300'> cat deveoper.txt</span>
              </div>
              <pre className='whitespace-pre-line text-green-500'>
                With four years of experience as a full-stack developer, I am
                deeply passionate about bridging the gap between people and
                technology. I find immense satisfaction in creating seamless
                user experiences that bring value to individuals. My technical
                expertise allows me to craft elegant solutions that positively
                impact the way people interact with technology.
                <br />
                <br />
                In addition to my technical skills, I am a firm believer in the
                power of collaboration. Bringing my personality and humor to
                technology teams is not just about making the workplace more
                pleasant, but also about fostering creativity and innovation. I
                am dedicated to not only delivering exceptional products but
                also ensuring that the process of creating them is enjoyable and
                rewarding for everyone involved.
              </pre>
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
}
