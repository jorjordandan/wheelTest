import Ring from "./Ring";
import {animated, useSpring} from "react-spring";

const Wheel = ({wheel, pos, scale}) => {

	const styles = useSpring({
		top: pos[1],
		left: pos[0],
		scale: scale,
	})

	return (
		<animated.div className="wheel-container" style={styles}>
		{wheel.map((layer, index) => {
			return (
				<Ring
					key={index}
					idx={index}
					layer={layer}

				/>
			);
		})}
		</animated.div>
	)
}

export default Wheel;