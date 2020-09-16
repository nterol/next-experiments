import * as React from "react";

import Current from "@molecules/current";
import Past from "@molecules/past";

function Timeline() {
  return (
    <div>
      <Past />
      <Current />
    </div>
  );
}

export default Timeline;
