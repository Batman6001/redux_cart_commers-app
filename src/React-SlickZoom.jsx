import React from 'react';
import Zoom from "./React-Slick";
export default function ReactSlickExample() {
        return (
            <>
            <div className="fluid react-slick">
                <div className="fluid__image-container">
                    <Zoom {...{
                        rimProps: {
                            isHintEnabled: true,
                            shouldHideHintAfterFirstActivation: false,
                            enlargedImagePosition: 'over'
                        }
                    }} />
                </div>
            </div>
            </>
        );
    }
