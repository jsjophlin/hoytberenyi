import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated as a } from "react-spring";

const AnimatedEntranceBlock = props => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const scaleProps = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "scale3d(1,1,1)" : "scale3d(0,0,0)"
    },
    from: { opacity: 0, transform: "scale3d(0,0,0)" },
    config: {
      mass: 2,
      tension: 65,
      friction: 20
    }
  });

  return (
    <a.div className="animated-entrance-block" ref={ref} style={scaleProps}>
      {props.children}
    </a.div>
  );
};

export default AnimatedEntranceBlock;
