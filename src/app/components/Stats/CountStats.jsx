"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CountUpNumber({ end, suffix = "+" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={2.5}
          separator=","
          suffix={suffix}
        />
      ) : (
        "0"
      )}
    </span>
  );
}