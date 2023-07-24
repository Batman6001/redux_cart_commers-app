import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import './styles/react-slick.css';
import luftone from './images/versace-blue/luftone.jpg';
import lufttwo from './images/versace-blue/lufttwo.jpg';
import luftthree from './images/versace-blue/luftthree.jpg';
import luftfour from './images/versace-blue/luftfour.jpg';
import luftfive from './images/versace-blue/luftfive.jpg';
import luftsix from './images/versace-blue/luftsix.jpg';
import luftseven from './images/versace-blue/luftseven.jpg';
import lufteight from './images/versace-blue/lufteight.jpg';
import luftnine from './images/versace-blue/luftnine.jpg';

const LuftSlick = ({ rimProps, rsProps }) => {
const front1SrcSet = [
  { src: luftone, setting: '500w' },
  { src: luftone, setting: '779w' },
  { src: luftone, setting: '1020w' },
  { src: luftone, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front2SrcSet = [
  { src: lufttwo, setting: '500w' },
  { src: lufttwo, setting: '779w' },
  { src: lufttwo, setting: '1020w' },
  { src: lufttwo, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front3SrcSet = [
  { src: luftthree, setting: '500w' },
  { src: luftthree, setting: '779w' },
  { src: luftthree, setting: '1020w' },
  { src: luftthree, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front4SrcSet = [
  { src: luftfour, setting: '500w' },
  { src: luftfour, setting: '779w' },
  { src: luftfour, setting: '1020w' },
  { src: luftfour, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front5SrcSet = [
  { src: luftfive, setting: '500w' },
  { src: luftfive, setting: '779w' },
  { src: luftfive, setting: '1020w' },
  { src: luftfive, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front6SrcSet = [
    { src: luftsix, setting: '500w' },
    { src: luftsix, setting: '779w' },
    { src: luftsix, setting: '1020w' },
    { src: luftsix, setting: '1200w' }
  ].map(item => `${item.src} ${item.setting}`).join(', ');

  const front7SrcSet = [
    { src: luftseven, setting: '500w' },
    { src: luftseven, setting: '779w' },
    { src: luftseven, setting: '1020w' },
    { src: luftseven, setting: '1200w' }
  ].map(item => `${item.src} ${item.setting}`).join(', ');

  const front8SrcSet = [
    { src: lufteight, setting: '500w' },
    { src: lufteight, setting: '779w' },
    { src: lufteight, setting: '1020w' },
    { src: lufteight, setting: '1200w' }
  ].map(item => `${item.src} ${item.setting}`).join(', ');

  const front9SrcSet = [
    { src: luftnine, setting: '500w' },
    { src: luftnine, setting: '779w' },
    { src: luftnine, setting: '1020w' },
    { src: luftnine, setting: '1200w' }
  ].map(item => `${item.src} ${item.setting}`).join(', ');

const dataSource = [
  {
    srcSet: front1SrcSet,
    small: luftone,
    large: luftone
  },
  {
    srcSet: front2SrcSet,
    small: lufttwo,
    large: lufttwo
  },
  {
    srcSet: front3SrcSet,
    small: luftthree,
    large: luftthree
  },
  {
    srcSet: front4SrcSet,
    small: luftfour,
    large: luftfour
  },
  {
    srcSet: front5SrcSet,
    small: luftfive,
    large: luftfive
  },
  {
    srcSet: front6SrcSet,
    small: luftsix,
    large: luftsix
  },
  {
    srcSet: front7SrcSet,
    small: luftseven,
    large: luftseven
  },
  {
    srcSet: front8SrcSet,
    small: lufteight,
    large: lufteight
  },
  {
    srcSet: front9SrcSet,
    small: luftnine,
    large: luftnine
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
export default LuftSlick;
