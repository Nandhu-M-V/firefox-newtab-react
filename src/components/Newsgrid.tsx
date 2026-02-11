type News2 = {
  url: string;
  urlToImage?: string;
  title: string;
  author?: string;
};

type Props = {
  news: News2[];
  filtredNews: News2[];
  showStories: boolean;
};

function NewsGrid({ showStories, filtredNews, news }: Props) {
  return (
    <>
      <section id="articlesection" className="">
        {showStories && (
          <h3 className="text-white font-bold">Thought-provoking stories</h3>
        )}
        <div
          id="article-containers"
          className="grid [@media(min-width:1400px)]:grid-cols-4 [@media(min-width:1050px)]:grid-cols-3 sm:grid-cols-2 gap-6 mt-7 "
        >
          {showStories &&
            (filtredNews.length > 0 ? filtredNews : news).map(
              (i) =>
                i.urlToImage && (
                  <div
                    key={i.url}
                    onClick={() => window.open(i.url, '_blank')}
                    className="w-75 h-72 flex flex-col shadow-black hover:shadow-xl hover:bg-[#42414D] text-white hover:text-[#08bfcc] overflow-hidden cursor-pointer items-center bg-[#42414D]/70 pb-4 rounded-3xl"
                  >
                    <img
                      src={i.urlToImage}
                      className="w-75 h-45 rounded-t-3xl"
                      alt=""
                    />
                    <p className="w-60 pt-2 text-[14px] font-semibold">
                      {i.title.slice(0, 60) + '...'}
                    </p>
                    <p className="relative w-40 right-12 top-4 text-gray-300 font-light text-sm">
                      {i.author?.includes('https') ? '' : i.author}
                    </p>
                  </div>
                )
            )}
        </div>
      </section>
    </>
  );
}

export default NewsGrid;
