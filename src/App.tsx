import bgimage from './assets/images/bg1.jpg';
import firefoxLogo from './assets/images/FF.png';
import pen from './assets/images/editpen.png';
import googleLogo from './assets/images/search.png';
import './App.css';

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

interface News {
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  author?: string;
}

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

function App() {
  const [news, setnews] = useState<News[]>([]);
  const [scrolled, setscrolled] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  //   const domain = getDomain(userInput);

  //   domain for shortcuts

  //     function getDomain(url: string) {
  //       try {
  //         return new URL(url).hostname;
  //       } catch {
  //         return url;
  //       }
  //     }

  //   checking scroll

  useEffect(() => {
    const el = scrollRef.current;

    const handleScroll = () => {
      if (el && el.scrollTop > 0) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    el?.addEventListener('scroll', handleScroll);

    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  //    api fetching
  //   useEffect(() => {
  //     const fetchNews = async () => {
  //       try {
  //         const response = await axios.get(
  //           'https://newsapi.org/v2/top-headlines',
  //           {
  //             params: {
  //               country: 'us',
  //               apiKey: import.meta.env.VITE_NEWS_API_KEY,
  //             },
  //           }
  //         );
  //         setnews(response.data.articles);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchNews();
  //   }, []);

  //   printing api
  useEffect(() => {
    console.log(news);
  }, [news]);

  //   console.log(import.meta.env.VITE_NEWS_API_KEY);

  return (
    <div id="fullcontainer">
      <div
        ref={scrollRef}
        className="w-full h-full overflow-scroll bg-cover bg-center fixed flex justify-center p-10"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <main className=" w-full max-w-7xl h-full flex flex-col items-center ">
          <div
            id="logo-firefox"
            className={` text-white flex items-center gap-3 [@media(min-width:1200px)]:absolute  lg:left-12 ${scrolled ? 'hidden' : 'block'}`}
          >
            <img src={firefoxLogo} alt="Firefox logo" className="w-14 h-14" />
            <span className="text-3xl font-bold">Firefox</span>
          </div>

          {/* search bar */}
          {/* https://www.google.com/search?client=firefox-b-d&q=hello+world */}
          <div
            className={`fixed w-screen h-25 top-0 bg-[#42414D]/70 border-b border-b-gray-500 ${scrolled ? 'block' : 'hidden'}`}
          ></div>
          <div
            id="search-holder"
            className={`w-full max-w-180 mt-4 flex items-center bg-[#42414D] rounded-md px-3
            ${scrolled ? 'sticky -top-3.5 z-50' : ''}`}
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5 mr-3" />

            <input
              className="bg-transparent text-white h-13 w-full outline-none"
              type="search"
              placeholder="Search with Google or enter address"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.location.href =
                    'https://www.google.com/search?q=' +
                    encodeURIComponent(e.currentTarget.value);
                }
              }}
            />
          </div>

          {/* shortcut icons  */}
          <div
            id="shortcutscontainer"
            className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 grid-cols-3 gap-14 mb-10 mt-10 "
          >
            <div className="bg-[#42414D] opacity-80 text-white w-16 h-16 rounded-2xl">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="bg-gray-600 opacity-80 text-white w-16 h-16 rounded-2xl">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="bg-gray-600 opacity-80 text-white w-16 h-16 rounded-2xl">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="bg-gray-600 opacity-80 text-white w-16 h-16 rounded-2xl">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="bg-gray-600 opacity-80 text-white w-16 h-16 rounded-2xl">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="bg-gray-600 opacity-80 text-white w-16 h-16 rounded-2xl">
              {/* <img src="" alt="" /> */}
            </div>
          </div>

          {/* news section */}

          <section id="articlesection" className="">
            <h3 className="text-white font-bold">Thought-provoking stories</h3>
            <div
              id="article-containers"
              className="grid [@media(min-width:1400px)]:grid-cols-4 [@media(min-width:1050px)]:grid-cols-3 sm:grid-cols-2 gap-6 mt-7 "
            >
              {news.map(
                (i, index) =>
                  i.urlToImage && (
                    <div
                      key={index}
                      className=" w-75 h-70 flex flex-col overflow-hidden items-center bg-[#42414D]/60 pb-4 rounded-3xl"
                    >
                      <img
                        src={i.urlToImage}
                        className="w-75 h-45 rounded-t-3xl"
                        alt=""
                      />
                      <p className="w-60 text-[14px] font-semibold text-white">
                        {i.title}
                      </p>
                      <p className="relative w-40 right-14 top-3 text-white font-extralight text-sm">
                        {i.author}
                      </p>
                    </div>
                  )
              )}
            </div>

            {/* sidebar */}
          </section>
          <Sheet>
            <SheetTrigger>
              <a className=" p-2 fixed z-10 right-10 bottom-5 bg-[#42414D] hover:bg-gray-600 rounded-sm text-white">
                <img src={pen} alt="edit" />
              </a>
            </SheetTrigger>

            <SheetContent
              side="right"
              className=" w-110 bg-[#42414D] border-l-0"
            >
              <div className="h-90 text-white">
                {/* wallpaper */}
                <div className="pt-15">
                  <div className="flex justify-between mx-10">
                    <p>Wallpapers</p>
                    <p>Reset to default</p>
                  </div>
                  <div className="grid grid-cols-3 grid-rows-3 p-4 text-sm">
                    <div className="flex flex-col items-center">
                      <div className="w-26 h-20 bg-amber-900 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-26 h-20 bg-amber-800 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-26 h-20 bg-amber-700 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-26 h-20 bg-amber-600 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-26 h-20 bg-amber-500 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-26 h-20 bg-amber-400 rounded-md"></div>
                      <p>Name</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-[90%] mx-[5%] border-gray-500" />
              {/* Toggles */}
              <div className="h-54 text-white bg-blue-200">
                <div>
                  <h2>Shortcuts</h2>
                  <p>Sites you save or visit</p>
                </div>
                <div>
                  <h2></h2>
                  <p></p>
                </div>
              </div>
              <hr className="w-[90%] mx-[5%] border-gray-500" />

              <div className=""></div>
            </SheetContent>
          </Sheet>
        </main>
      </div>
    </div>
  );
}

export default App;
