import bgimage from './assets/images/bg1.jpg';
import firefoxLogo from './assets/images/FF.png';

function App() {
  return (
    <div id="fullcontainer">
      <div
        className="w-full h-screen bg-cover bg-center fixed flex justify-center p-10"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <main className=" w-full max-w-7xl h-full flex flex-col items-center bg-gray-700 ">
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
              className="bg-gray-400 h-13 w-full max-w-150 rounded-md"
              type="search"
              placeholder="search with Google or enter address "
            />
          </div>

          <div
            id="shortcutscontainer"
            className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 sm gap-10 mb-10 mt-10 "
          >
            <div className="bg-gray-600 w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-16 h-16 rounded-2xl">
              <img src="" alt="" />
            </div>
          </div>

          <section id="articlesection" className="">
            <h3>Thought-provoking stories</h3>
            <div
              id="article-containers"
              className="grid grid-cols-3 grid-rows-3 gap-4 mt-7 "
            >
              <div className=" w-70 h-70 flex flex-col items-center">
                <div className="bg-amber-300 w-60 h-60 "></div>
                <p className="w-60">
                  Random text gooooooooooooooo gooooooooooooooo gooooooooooooooo
                </p>
              </div>
              <div className=" w-70 h-70 flex flex-col items-center">
                <div className="bg-amber-300 w-60 h-60 "></div>
                <p className="w-60">
                  Random text gooooooooooooooo gooooooooooooooo gooooooooooooooo
                </p>
              </div>
              <div className=" w-70 h-70 flex flex-col items-center">
                <div className="bg-amber-300 w-60 h-60 "></div>
                <p className="w-60">
                  Random text gooooooooooooooo gooooooooooooooo gooooooooooooooo
                </p>
              </div>
              <div className=" w-70 h-70 flex flex-col items-center">
                <div className="bg-amber-300 w-60 h-60 "></div>
                <p className="w-60">
                  Random text gooooooooooooooo gooooooooooooooo gooooooooooooooo
                </p>
              </div>
              <div className=" w-70 h-70 flex flex-col items-center">
                <div className="bg-amber-300 w-60 h-60 "></div>
                <p className="w-60">
                  Random text gooooooooooooooo gooooooooooooooo gooooooooooooooo
                </p>
              </div>
              <div className=" w-70 h-70 flex flex-col items-center">
                <div className="bg-amber-300 w-60 h-60 "></div>
                <p className="w-60">
                  Random text gooooooooooooooo gooooooooooooooo gooooooooooooooo
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
