import React from "react";
import { Canvas } from "react-three-fiber";

import Cube from "@atoms/cube";

function Cubes(): JSX.Element {
  return (
    <main>
      <section style={{ marginTop: "10vh" }}>
        <Canvas style={{ outline: "1px solid blue" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cube position={[-4, 4, 0, 0]} />
          <Cube position={[4, 4, 0, 0]} />
        </Canvas>
      </section>
    </main>
  );
}

export default Cubes;
