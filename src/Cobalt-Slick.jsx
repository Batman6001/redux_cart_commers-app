import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import './styles/react-slick.css';
import cobaltone from './images/versace-blue/cobaltone.jpg';
import cobalttwo from './images/versace-blue/cobalttwo.jpg';
import cobaltthree from './images/versace-blue/cobaltthree.jpg';
import Cobaltfour from './images/versace-blue/Cobaltfour.jpg';
import cobaltfive from './images/versace-blue/cobaltfive.jpg';
import cobaltsix from './images/versace-blue/cobaltsix.jpg';

const CobaltSlick = ({ rimProps, rsProps }) => {
const front1SrcSet = [
  { src: cobaltone, setting: '500w' },
  { src: cobaltone, setting: '779w' },
  { src: cobaltone, setting: '1020w' },
  { src: cobaltone, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front2SrcSet = [
  { src: cobalttwo, setting: '500w' },
  { src: cobalttwo, setting: '779w' },
  { src: cobalttwo, setting: '1020w' },
  { src: cobalttwo, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front3SrcSet = [
  { src: cobaltthree, setting: '500w' },
  { src: cobaltthree, setting: '779w' },
  { src: cobaltthree, setting: '1020w' },
  { src: cobaltthree, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front4SrcSet = [
  { src: Cobaltfour, setting: '500w' },
  { src: Cobaltfour, setting: '779w' },
  { src: Cobaltfour, setting: '1020w' },
  { src: Cobaltfour, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front5SrcSet = [
  { src: cobaltfive, setting: '500w' },
  { src: cobaltfive, setting: '779w' },
  { src: cobaltfive, setting: '1020w' },
  { src: cobaltfive, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front6SrcSet = [
    { src: cobaltsix, setting: '500w' },
    { src: cobaltsix, setting: '779w' },
    { src: cobaltsix, setting: '1020w' },
    { src: cobaltsix, setting: '1200w' }
  ].map(item => `${item.src} ${item.setting}`).join(', ');

const dataSource = [
  {
    srcSet: front1SrcSet,
    small: cobaltone,
    large: cobaltone
  },
  {
    srcSet: front2SrcSet,
    small: cobalttwo,
    large: cobalttwo
  },
  {
    srcSet: front3SrcSet,
    small: cobaltthree,
    large: cobaltthree
  },
  {
    srcSet: front4SrcSet,
    small: Cobaltfour,
    large: Cobaltfour
  },
  {
    srcSet: front5SrcSet,
    small: cobaltfive,
    large: cobaltfive
  },
  {
    srcSet: front6SrcSet,
    small: cobaltsix,
    large: cobaltsix
  }
];
  return (
    <ReactSlick
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      {...rsProps}
    >
      {dataSource.map((src, index) => (
        <div key={index}>
          <ReactImageMagnify
            smallImage={{
              alt: 'Versace',
              isFluidWidth: true,
              src: src.small,
              srcSet: src.srcSet,
              sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
            }}
            largeImage={{
              src: src.large,
              width: 1200,
              height: 1200
            }}
            lensStyle={{ backgroundColor: 'rgba(0,0,0,.6)' }}
            {...rimProps}
          />
        </div>
      ))}
    </ReactSlick>
  );
};
export default CobaltSlick;