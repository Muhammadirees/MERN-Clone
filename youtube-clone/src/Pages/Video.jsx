import React from "react";
import { useParams } from "react-router-dom";

import Recommanded from "../Components/Sidebar/Recommanded";
import VideoPLay from "../Components/VideoPlay/VideoPLay";

const Video = () => {
  return (
    <main className="flex-wrap flex cs:flex-nowrap pt-10 px-12 lg:px-2 xl:px-12 gap-x-3">
      <VideoPLay />
      <Recommanded />
    </main>
  );
};

export default Video;
