import bgimage from './assets/images/bg1.jpg';
import firefoxLogo from './assets/images/FF.png';
import './App.css';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

function App() {
  return (
    <div id="fullcontainer">
      <div
        className="w-full h-full overflow-scroll bg-cover bg-center fixed flex justify-center p-10"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <main className=" w-full max-w-7xl h-full flex flex-col items-center  ">
          <div
            id="logo-firefox"
            className=" text-white flex items-center gap-3 lg:absolute lg:left-12"
          >
            <img src={firefoxLogo} alt="Firefox logo" className="w-14 h-14" />
            <span className="text-3xl font-bold">Firefox</span>
          </div>

          <div id="search-holder" className=" w-full max-w-150 mt-4">
            <button>
              <img src="" alt="" />
            </button>
            <input
              className="bg-gray-600 text-white h-13 w-full max-w-150 rounded-md"
              type="search"
              placeholder="search with Google or enter address "
            />
          </div>

          <div
            id="shortcutscontainer"
            className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 grid-cols-3 gap-14 mb-10 mt-10 "
          >
            <div className="bg-gray-600 opacity-80 text-white w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 text-white rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 text-white rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 text-white rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 text-white rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 text-white rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 text-white rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 text-white rounded-2xl">
              <img src="" alt="" />
            </div>
          </div>

          <section id="articlesection" className="">
            <h3 className="text-white font-bold">Thought-provoking stories</h3>
            <div
              id="article-containers"
              className="grid lg:grid-cols-4  md:grid-cols-3  gap-6 mt-7 "
            >
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
              <div className=" w-75 h-65 flex flex-col items-center bg-gray-600/60 pb-4 rounded-3xl">
                <img src={bgimage} className="w-75 h-45 rounded-t-3xl" alt="" />
                <p className="w-60 text-white">Random text gooooooooooooooo</p>
                <p>label</p>
              </div>
            </div>
          </section>
          <Sheet>
            <SheetTrigger>
              <button className="ml-4 px-3 py-1 bg-blue-600 rounded-md text-white">
                Open
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Shortcuts</SheetTitle>
                <SheetDescription>Click any shortcut to go</SheetDescription>
              </SheetHeader>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-gray-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white"></div>
              </div>
            </SheetContent>
          </Sheet>
        </main>
      </div>
    </div>
  );
}

export default App;
