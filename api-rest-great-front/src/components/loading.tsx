import axios from "axios";
import { useEffect, useState } from "react";
import { CircleNotch } from "phosphor-react";

function Loading() {
  return (
    <div className="w-100vw h-100vh bg-slate-900 opacity-40 flex justify-center items-center">
      <CircleNotch
        weight="bold"
        size={256}
        className="w-[250px] h-[250px] rounded-xl text-white animate-spin"
      />
    </div>
  );
}

export default Loading;
