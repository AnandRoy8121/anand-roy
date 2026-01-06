import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = ({ image }) => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {image ? (
        <img src={image} alt="Loading..." style={{ width: 300, height: 300, objectFit: 'contain' }} />
      ) : (
        <span className='canvas-loader'></span>
      )}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
