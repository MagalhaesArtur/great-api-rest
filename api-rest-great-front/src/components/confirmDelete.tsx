import axios from "axios";
import { useEffect, useState } from "react";
import { CircleNotch } from "phosphor-react";

function ConfirmDelete(props: any) {
  return (
    <div className="right-[50vw] top-[50vh] absolute  bg-green-500 opacity-40 flex justify-center items-center">
      <button
        onClick={() => {
          props.setConfirmDelete(true);
        }}
        className="bg-red-500 w-[100px] text-white"
      >
        {" "}
        confirmar?
      </button>
    </div>
  );
}

export default ConfirmDelete;
