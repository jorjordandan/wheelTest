import { animated, useSpring } from "react-spring";

const Ring = ({ layer, idx, scale, pos}) => {
  // console.log(layer);
  

  const styles = useSpring({
    opacity: layer.opacity,
    rotate: layer.rot,
		left: 0,
		top: 0,
		// left: pos[0],
		// top: pos[1],
    // scale: scale,
		config: {mass:.2, tension:500, friction: 5},
    delay: 0,
  });

	const clicktest = (e) => {
		console.log(e);
	}

  return (
    <animated.img
      src={layer.src}
      style={styles}
      className="wheel"
      alt="layer one"
			test="test"
			onClick={clicktest}
    />
  );
};

export default Ring;
