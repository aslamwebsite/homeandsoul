import React, { useState, useRef } from "react";
import WebContainer from '../WebContainer/Index'
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { Restore, ZoomIn, ZoomOut } from "@mui/icons-material";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>
        <ZoomIn />
      </button>
      <button onClick={() => zoomOut()}>
        <ZoomOut />
      </button>
      <button onClick={() => resetTransform()}>
        <Restore />
      </button>
    </div>
  );
};

const LocationMap = () => {
  const [showAlert, setShowAlert] = useState(false);
  const imgRef = useRef(null);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 100);
  };

  // Use useEffect to simulate click after imgRef is properly initialized
  React.useEffect(() => {
    const currentImgRef = imgRef.current;
    if (currentImgRef) {
      currentImgRef.click(); // Simulate click on the image
    }
  }, [imgRef]); // Ensure useEffect runs when imgRef changes

  return (
    <WebContainer _parentClass={'m-0'}>
      <div className="col-12 float-start position-relative locationMap">
        <div className='title flex-center'>
          <span className='m-0'>Location Map</span>
        </div>
        <div className="col-12 float-start position-relative MapHeight">
          <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
            className="col-12"
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <Controls />
                <TransformComponent>
                  <div className="col-12 float-start">
                    <img
                      ref={imgRef}
                      src="https://triverseadvertising.com/ss-group/file/1946530447SS%20Linden_Location%20Map.jpg"
                      alt="Location Map"
                      className="col-12"
                      onClick={handleClick}
                    />
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
        {showAlert && <div className="alert">Image clicked!</div>}
      </div>
    </WebContainer>
  );
};

export default LocationMap;
