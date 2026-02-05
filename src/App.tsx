import bgimage from './assets/images/bg1.jpg';

function App() {
  return (
    <div id="fullcontainer">
      <div
        className="w-full h-screen bg-cover bg-center flex justify-center "
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <main className=" w-full max-w-7xl m-10 h-full flex-col items-center bg-gray-700 ">
          <div id="logo-firefox" className=" text-white flex gap-7">
            <img src="" alt="Firefox logo" />
            <span>Firefox</span>
          </div>

          <input
            className="bg-amber-50 h-12 w-xl rounded-md"
            type="search"
            placeholder="search with Google or enter address "
          />

          <div id="shortcutscontainer" className="flex gap-10  ">
            <div className="bg-gray-600 w-20 h-20 rounded-md">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-20 h-20 rounded-md">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-20 h-20 rounded-md">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-20 h-20 rounded-md">
              <img src="" alt="" />
            </div>
            <div className="bg-gray-600 w-20 h-20 rounded-md">
              <img src="" alt="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
