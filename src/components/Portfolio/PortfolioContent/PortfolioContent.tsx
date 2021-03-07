import * as React from 'react';
interface Props {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
}

const PortfolioContent = (props: Props) => {
  const { link, img, title, tech } = props;

  /*   const showProjectTech = () => {
    let techArray = tech.split(' ');
    return techArray.map((tech: string, key: number) => (
      <span key={key} className="py-1 text-sm font-semibold text-white ">
        {tech}
      </span>
    ));
  };
 */
  return (
    <li className="flex flex-col justify-start mb-5 list-none shadow-2xl md:flex-row">
      <div className="max-w-2xl p-5 tracking-wide">
        <div className="flex flex-col md:flex-row">
          <img
            alt={title}
            className="w-48 border-2 rounded-md"
            /* src="https://picsum.photos/seed/picsum/200" */
            src={img}
          />

          <div className="flex flex-col flex-wrap justify-start ml-5">
            <h4 id="name" className="mb-2 text-xl font-semibold text-left">
              {title}
            </h4>
            <p className="mt-2 text-left text-white">{tech}</p>
            {/*  <div className="flex flex-wrap mt-5">{showProjectTech()}</div> */}
            <div className="flex flex-wrap mt-2 text-white cursor-pointer hover:underline">
              {link}
            </div>
          </div>
        </div>
      </div>
      {/*    <a href={link} target="_blank" rel="noreferrer noopener">
        <img
          className="w'full md:w-28 md:h-28 md:hover:w-64 md:hover:h-32"
          alt="target"
          src={img}
        />
      </a>

      <div className="flex flex-col align-center">
        <div>
          <h3 className="title">{title}</h3>
        </div>
        <div>{tech}</div>
        <a href={link} target="_blank">
          <div className="hover:underline">{link}</div>
        </a>
      </div> */}
    </li>
  );
};

export default PortfolioContent;
/* 
<article className="relative grid-cols-5 bg-white rounded-lg shadow-sm sm:grid p-7 lg:max-w-2xl sm:p-4 lg:col-span-2 lg:ml-20">
  <img
    src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    alt="Just a flower"
    className="w-full rounded-lg"
  />
  <div className="self-center col-span-3 pt-5 sm:pt-0 sm:pl-10">
    <h2 className="text-xl font-bold text-gray-800 capitalize">
      hypnotherapy for motivation getting the drive back
    </h2>
    by{' '}
    <a href="#" className="inline-block pt-2 underline capitalize">
      dorothy parks
    </a>
  </div>
  <div className="justify-self-end">
    <img
      src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Bookmark-256.png"
      alt="Bookmark"
      className="absolute w-8 top-3 right-3 sm:relative sm:top-0 sm:right-0"
    />
  </div>
</article>; */
