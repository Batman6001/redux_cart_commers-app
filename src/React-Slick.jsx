import React, { Component } from 'react';
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from 'react-slick';
import "./styles/react-slick.css"

import front1_500 from "./images/versace-blue/front1-500.jpg"
import second from "./images/versace-blue/second.jpg"
import third from "./images/versace-blue/third.jpg"
import four from "./images/versace-blue/four.jpg"
import five from "./images/versace-blue/five.jpg"

const front1SrcSet = [
    { src: front1_500, setting: '500w' },
    { src: front1_500, setting: '779w' },
    { src: front1_500, setting: '1020w' },
    { src: front1_500, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front2SrcSet = [
    { src: second, setting: '500w' },
    { src: second, setting: '779w' },
    { src: second, setting: '1020w' },
    { src: second, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front3SrcSet = [
    { src: third, setting: '500w' },
    { src: third, setting: '779w' },
    { src: third, setting: '1020w' },
    { src: third, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front4SrcSet = [
    { src: four, setting: '500w' },
    { src: four, setting: '779w' },
    { src: four, setting: '1020w' },
    { src: four, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const front5SrcSet = [
    { src: five, setting: '500w' },
    { src: five, setting: '779w' },
    { src: five, setting: '1020w' },
    { src: five, setting: '1200w' }
].map(item => `${item.src} ${item.setting}`).join(', ');

const dataSource = [
    {
        srcSet: front1SrcSet,
        small: front1_500,
        large: front1_500
    },
    {
        srcSet: front2SrcSet,
        small: second,
        large: second
    },
    {
        srcSet: front3SrcSet,
        small: third,
        large: third
    },
    {
        srcSet: front4SrcSet,
        small: four,
        large: four
    },
    {
        srcSet: front5SrcSet,
        small: five,
        large: five
    },
    
];

export default class Zoom extends Component {
    render() {
        const {
            rimProps,
            rsProps
        } = this.props;

        return (
            <ReactSlick
                {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }}
                {...rsProps}
            >
                {dataSource.map((src, index) => (
                    <div key={index}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: src.small,
                                    srcSet: src.srcSet,
                                    sizes:'(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: src.large,
                                    width: 1200,
                                    height: 1200
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            {...rimProps}
                        />
                    </div>
                ))}
            </ReactSlick>
        );
    }
}