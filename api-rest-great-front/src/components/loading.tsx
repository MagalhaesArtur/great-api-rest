import axios from "axios";
import { useEffect, useState } from "react";
import { CircleNotch } from "phosphor-react";

function Loading() {
  return (
    <div className="w-100vw h-100vh bg-black opacity-40 flex justify-center items-center">
      <CircleNotch weight="bold" className="w-8 h-8 animate-spin" />
    </div>
  );
}

export default Loading;
