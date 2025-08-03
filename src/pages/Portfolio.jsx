import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CTA } from "../components";

const maps = [
  {
    id: 1,
    title: 'Tourist Map of North Carolina',
    file: '/pdfs/nc.pdf',
    description: 'Spring 2025, ArcGIS Pro, Adobe Illustrator',
  },
  {
    id: 2,
    title: 'Reference Map of the United States',
    file: '/pdfs/reference.pdf',
    description: 'Spring 2025, Inspired by the 2002 CIA Map, ArcGIS Pro, Adobe Illustrator',
  },
  {
    id: 3,
    title: 'World Archery Championships Medals in European Countries',
    file: '/pdfs/archery.pdf',
    description: 'Spring 2025, World Archery Data, ArcGIS Pro, Adobe Illustrator',
  },
  {
    id: 4,
    title: 'Out of the Sky: Boeing 737 Air Disasters & Safety',
    file: '/pdfs/boeing.pdf',
    description: 'Spring 2025, Aviation Safety Network, ArcGIS Pro, Adobe Illustrator',
  },
  {
    id: 5,
    title: 'Siming District Attractions',
    file: '/pdfs/siming.pdf',
    description: 'Spring 2025, OSM, QGIS, Adobe Illustrator',
  },
];

const Maps = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Cartography Portfolio
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        A curated gallery of maps I’ve designed while learning and exploring the art of cartography.

      </p>

      <div className='my-20'>
        <Slider {...settings}>
          {maps.map((map) => (
            <div key={map.id} className='px-4'>
              <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div className='w-full h-[500px]'>
                  <embed
                    src={map.file}
                    type='application/pdf'
                    width='100%'
                    height='100%'
                  />
                </div>
                <div className='p-4'>
                  <h4 className='text-xl font-semibold text-slate-700'>
                    {map.title}
                  </h4>
                  {map.description && (
                    <p className='mt-2 text-slate-500 text-sm'>
                      {map.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <CTA/>
    </section>
  );
};

export default Maps;