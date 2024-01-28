import React, { useState } from 'react';
import styled from "styled-components";
import {flexCenter, imageDefault} from "../../styles/styles";

const Modal = styled.div`
  position: relative;
  display: inline-block;
  cursor: zoom-in;
  .modal__image{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 90vh;
    ${flexCenter};
    z-index: 30;
    img{
      object-fit: contain;
      ${imageDefault};
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: zoom-out;
  ${flexCenter};
  z-index: 20;
`;

const ZoomableImage = ({src, alt, className = ''}) => {
    const [zoomed, setZoomed] = useState(false);

    const handleZoomToggle = () => {
        setZoomed(!zoomed);
    };

    return (
        <Modal
            className={className}
            onClick={handleZoomToggle}
        >
            <img
                src={src}
                alt={alt}
            />
            {
                zoomed &&
                <Overlay
                    onClick={handleZoomToggle}
                >
                    <div className='modal__image'>
                        <img src={src} alt={alt}/>
                    </div>
                </Overlay>
            }
        </Modal>
    );
};

export default ZoomableImage;