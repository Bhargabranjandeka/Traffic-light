import { useEffect, useState } from "react";

const Lights = [
  { color: "red", duration: 4000 },
  { color: "yellow", duration: 400 },
  { color: "green", duration: 2000 },
];
export default function Trafficlight() {
  const [switchlights, setSwitchlights] = useState(0);

  const handleswitching = function () {
    // Rotate through the Lights array
    if (switchlights === 0) {
      setSwitchlights(Lights.length - 1);
    } else setSwitchlights(switchlights - 1);
  };

  useEffect(
    function () {
      const { duration } = Lights[switchlights];
      const timer = setInterval(() => {
        handleswitching();
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    },
    [switchlights]
  );

  return (
    <div className="trafficlight">
      {Lights.map((light, index) => (
        <button
          key={index}
          // Add css classes based on the value of switchlight in the lights array
          className={`light ${switchlights !== index ? "" : light.color}`}
        />
      ))}
    </div>
  );
}
