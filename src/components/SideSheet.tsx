import bgimagesky from '../assets/images/Sky.jpg';
import pen from '../assets/images/editpen.png';
import bgimage from '../assets/images/bg1.jpg';
import bgcity from '../assets/images/city.jpg';
import bgspace from '../assets/images/space.jpg';

// import { useState } from 'react';

import { Switch } from './ui/switch';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
// import { Button } from './ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from './ui/dropdown-menu';

type SideSheetProps = {
  showStories: boolean;
  setShowStories: (v: boolean) => void;
  showShorts: boolean;
  setShowShorts: (v: boolean) => void;
  rows: '1' | '2' | '3';
  setRows: (v: '1' | '2' | '3') => void;
  setBackground: (img: string) => void;
  background: string;
};

function SideSheet({
  showStories,
  setShowStories,
  showShorts,
  setShowShorts,
  //   rows,
  //   setRows,
  setBackground,
  background,
}: SideSheetProps) {
  //   const handleRowsChange = (value: string) => {
  //     if (value === '1' || value === '2' || value === '3') {
  //       setRows(value);
  //     }
  //   };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <a className=" p-2 fixed z-10 right-10 bottom-5 bg-gray-600 hover:bg-gray-500 rounded-sm text-white">
            <img src={pen} alt="edit" />
          </a>
        </SheetTrigger>

        <SheetContent side="right" className=" w-110 bg-[#42414D] border-l-0">
          <SheetTitle className=" hidden"></SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="h-90 text-white">
            {/* wallpaper */}
            <div className="pt-20 mr-0 cursor-default ">
              <div className="flex justify-between mx-10">
                <p>Wallpapers</p>
                <p
                  className="text-sm underline hover:no-underline cursor-pointer"
                  onClick={() => setBackground('')}
                >
                  Reset to default
                </p>
              </div>
              <div className="grid grid-cols-3 grid-rows-3 gap-y-10 p-4 text-[13px] ">
                <div className="flex flex-col items-center gap-y-0.5">
                  <img
                    src={bgimage}
                    onClick={() => setBackground(bgimage)}
                    alt="bg"
                    className={`w-26 h-20  hover:brightness-75 cursor-pointer rounded-md ${background === bgimage ? 'border-3 border-blue-400' : ''}`}
                  />
                  <p>Abstract</p>
                </div>
                <div className="flex flex-col items-center gap-y-0.5">
                  <div
                    className={`w-26 h-20 bg-gray-600 rounded-md hover:brightness-75 cursor-pointer ${background === '' ? 'border-3 border-blue-400' : ''}`}
                    onClick={() => setBackground('')}
                  ></div>
                  <p>Solid color</p>
                </div>
                <div className="flex flex-col items-center gap-y-0.5">
                  <img
                    src={bgimagesky}
                    onClick={() => setBackground(bgimagesky)}
                    alt="bg"
                    className={`w-26 h-20 rounded-md hover:brightness-75 cursor-pointer ${background === bgimagesky ? 'border-3 border-blue-400' : ''}`}
                  />
                  <p>Photographs</p>
                </div>
                <div className="flex flex-col items-center gap-y-0.5">
                  <img
                    src={bgcity}
                    onClick={() => setBackground(bgcity)}
                    alt="CityScapes"
                    className={`w-26 h-20 rounded-md hover:brightness-75 cursor-pointer ${background === bgcity ? 'border-3 border-blue-400' : ''}`}
                  />
                  <p>Cityscapes</p>
                </div>
                <div className="flex flex-col items-center gap-y-0.5">
                  <img
                    src={bgspace}
                    onClick={() => setBackground(bgspace)}
                    alt="Space"
                    className={`w-26 h-20 rounded-md hover:brightness-75 cursor-pointer ${background === bgspace ? 'border-3 border-blue-400' : ''}`}
                  />
                  <p>Space</p>
                </div>
                <div className="flex flex-col items-center gap-y-0.5">
                  <div className="w-26 h-20 flex justify-center hover:brightness-75 cursor-pointer items-center rounded-md border-2 border-dashed">
                    <span className=" material-symbols-outlined">add</span>
                  </div>
                  <p>Upload an Image</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-[90%] mx-[5%] border-gray-500" />
          {/* Toggles */}
          <div className="h-54 cursor-default text-white">
            <div className="pl-20 cursor-default pt-4">
              <Switch
                className="absolute left-7 cursor-pointer "
                id="shortcuts"
                checked={showShorts}
                onCheckedChange={setShowShorts}
              />
              <h2>Shortcuts</h2>
              <p className="text-[13px] text-gray-300">
                Sites you save or visit
              </p>
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-[#42414D] rounded-sm border cursor-pointer border-gray-500">
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
              </DropdownMenu> */}
            </div>
            <div className="pl-20 pt-4">
              <Switch
                className="absolute left-7 cursor-pointer"
                id="stories"
                checked={showStories}
                onCheckedChange={setShowStories}
              />

              <h2>Recommended stories</h2>
              <p className="text-[13px] text-gray-300">
                Exceptional content curated by the Firefox family
              </p>
            </div>
          </div>
          <hr className="w-[90%] mx-[5%] relative bottom-10 border-gray-500" />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SideSheet;
