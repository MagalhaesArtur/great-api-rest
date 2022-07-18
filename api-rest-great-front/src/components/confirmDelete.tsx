import axios from "axios";
import { useEffect, useState } from "react";
import { CircleNotch } from "phosphor-react";

function ConfirmDelete(props: any) {
  return (
    <div className="w-100vw h-100vh absolute bg-slate-900 opacity-40 flex justify-center items-center">
      <button
        onClick={() => {
          props.setConfirmDelete(true);
        }}
        className="bg-red text-white"
      >
        {" "}
        confirmar?
      </button>
    </div>
  );
}

export default ConfirmDelete;
