import axios from "axios";
import { useEffect, useState } from "react";
import { CircleNotch } from "phosphor-react";

function ConfirmDelete(props: any) {
  return (
    <div className="right-[50%] top-[50%] absolute p-20 bg-slate-900 opacity-40 flex justify-center items-center">
      <button
        onClick={() => {
          props.setConfirmDelete(true);
        }}
        className="bg-red w-[100px] text-white"
      >
        {" "}
        confirmar?
      </button>
    </div>
  );
}

export default ConfirmDelete;
