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

import { Switch } from './components/ui/switch';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from './components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';

type Shortcut = {
  logo: string;
  name: string;
  url: string;
};

function App() {
  const [news, setnews] = useState<News[]>([]);
  const [scrolled, setscrolled] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [showStories, setshowStories] = useState(true);
  const [showShorts, setshowShorts] = useState(true);

  const [shortcuts, setShortcuts] = useState<Shortcut[]>([
    {
      name: 'GitHub',
      url: 'https://github.com',
      logo: 'https://www.google.com/s2/favicons?sz=64&domain=github.com',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      logo: 'https://www.google.com/s2/favicons?sz=64&domain=youtube.com',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      logo: 'https://www.google.com/s2/favicons?sz=64&domain=twitter.com',
    },
  ]);

  //   console.log(shortcuts);

  // row numbers

  const [rows, setRows] = useState<'1' | '2' | '3'>('1');

  const handleRowsChange = (value: string) => {
    if (value === '1' || value === '2' || value === '3') {
      setRows(value);
    }
  };

  //   console.log(rows);

  //   const domain = getDomain(userInput);

  //   domain and img of shortcuts

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

  //  api fetching
  useEffect(() => {
    if (!showStories) return;

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          {
            params: {
              country: 'us',
              apiKey: import.meta.env.VITE_NEWS_API_KEY,
            },
          }
        );
        setnews(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, [showStories]);

  //   printing api
  //   useEffect(() => {
  //     console.log(news);
  //   }, [news]);

  //   console.log(import.meta.env.VITE_NEWS_API_KEY);

  return (
    <div id="fullcontainer" className="overflow-hidden">
      <div
        ref={scrollRef}
        className="w-full h-full overflow-scroll bg-cover bg-center fixed flex justify-center p-10"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <main
          className={` w-full max-w-7xl h-full flex flex-col  items-center  ${showStories ? '' : 'justify-center'} `}
        >
          <div
            id="logo-firefox"
            className={` text-white z-8 flex items-center gap-3 left-12 ${scrolled ? 'hidden' : 'block'} ${showStories ? 'absolute' : ''}`}
          >
            <img src={firefoxLogo} alt="Firefox logo" className="w-14 h-14" />
            <span className="text-3xl font-bold hidden [@media(min-width:1170px)]:block">
              Firefox
            </span>
          </div>

          {/* search bar */}
          <div
            className={`fixed w-screen h-25 top-0 bg-[#42414D]/70 border-b border-b-gray-500 ${scrolled ? 'block' : 'hidden'}`}
          ></div>
          <div
            id="search-holder"
            className={` [@media(min-width:1000px)]:w-full sm:w-100 z-10  max-w-180 mt-4 flex items-center bg-[#42414D] rounded-md px-3
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
          {showShorts && (
            <div
              id="shortcutscontainer"
              className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 grid-cols-3 mb-4 mt-16 "
            >
              {shortcuts.map((i) => (
                <div
                  key={i.name}
                  onClick={() => {
                    window.location.href = `${i.url}`;
                  }}
                  className="hover:bg-white/20 cursor-pointer bg-none rounded-xl w-28 pb-3 h-30 flex flex-col justify-center items-center"
                >
                  <div className="bg-[#42414D]/80 flex flex-col justify-center items-center  text-white w-16 h-16 rounded-2xl">
                    <img className="w-9 rounded-md " src={i.logo} alt="logo" />
                  </div>
                  <p className="text-center text-white">{i.name}</p>
                </div>
              ))}
            </div>
          )}

          {/* news section */}

          <section id="articlesection" className="">
            {showStories && (
              <h3 className="text-white font-bold">
                Thought-provoking stories
              </h3>
            )}
            <div
              id="article-containers"
              className="grid [@media(min-width:1400px)]:grid-cols-4 [@media(min-width:1050px)]:grid-cols-3 sm:grid-cols-2 gap-6 mt-7 "
            >
              {showStories &&
                news.map(
                  (i, index) =>
                    i.urlToImage && (
                      <div
                        key={index}
                        onClick={() => {
                          window.location.href = `${i.url}`;
                        }}
                        className=" w-75 h-72 flex flex-col hover:shadow-lg hover:bg-[#42414D] text-white hover:text-[#08bfcc] overflow-hidden cursor-pointer items-center bg-[#42414D]/70 pb-4 rounded-3xl"
                      >
                        <img
                          src={i.urlToImage}
                          className="w-75 h-45 rounded-t-3xl"
                          alt=""
                        />
                        <p className="w-60 pt-2 text-[14px] font-semibold ">
                          {i.title}
                        </p>
                        <p className="relative w-40 right-14 top-3 text-white font-extralight text-sm">
                          {i.author?.includes('https') ? '' : i.author}
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
              className=" w-115 bg-[#42414D] border-l-0"
            >
              <div className="h-90 text-white">
                {/* wallpaper */}
                <div className="pt-15 mr-10">
                  <div className="flex justify-between mx-10">
                    <p>Wallpapers</p>
                    <p className="text-sm">Reset to default</p>
                  </div>
                  <div className="grid grid-cols-3 grid-rows-3 gap-y-10 p-4 text-sm ">
                    <div className="flex flex-col items-center gap-y-0.5">
                      <div className="w-26 h-20 bg-amber-900 rounded-md "></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-0.5">
                      <div className="w-26 h-20 bg-amber-800 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-0.5">
                      <div className="w-26 h-20 bg-amber-700 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-0.5">
                      <div className="w-26 h-20 bg-amber-600 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-0.5">
                      <div className="w-26 h-20 bg-amber-500 rounded-md"></div>
                      <p>Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-0.5">
                      <div className="w-26 h-20  rounded-md border-2 border-dashed"></div>
                      <p>Upload an Image</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-[90%] mx-[5%] border-gray-500" />
              {/* Toggles */}
              <div className="h-54 text-white">
                <div className="pl-20 pt-4">
                  <Switch
                    className="absolute left-7 "
                    id="shortcuts"
                    checked={showShorts}
                    onCheckedChange={setshowShorts}
                  />
                  <h2>Shortcuts</h2>
                  <p className="text-[13px] text-gray-300">
                    Sites you save or visit
                  </p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-[#42414D] rounded-sm border border-gray-500">
                        <p className="text-xs text-gray-300">Number of rows</p>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20 bg-[#141414] border border-gray-500 text-white">
                      <DropdownMenuGroup>
                        <DropdownMenuRadioGroup
                          value={rows}
                          onValueChange={handleRowsChange}
                        >
                          <DropdownMenuRadioItem value="1">
                            1 Row
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="2">
                            2 Row
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="3">
                            3 Row
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="pl-20 pt-4">
                  <Switch
                    className="absolute left-7 "
                    id="stories"
                    checked={showStories}
                    onCheckedChange={setshowStories}
                  />

                  <h2>Recommended stories</h2>
                  <p className="text-[13px] text-gray-300">
                    Exceptional content curated by the Firefox family
                  </p>
                </div>
              </div>
              <hr className="w-[90%] mx-[5%] relative bottom-10 border-gray-500" />

              <div className="">
                <a
                  className="relative left-14 bottom-6 text-[#08bfcc] underline text-[14px]"
                  href=""
                >
                  Manage more settings
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </main>
      </div>
    </div>
  );
}

export default App;
