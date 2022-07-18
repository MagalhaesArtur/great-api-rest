import axios from "axios";
import { useEffect, useState } from "react";
import { CircleNotch } from "phosphor-react";

function ConfirmDelete(props: any) {
  return (
    <div className=" flex justify-center items-center">
      <div className="text-center right-[50vw] top-[50vh] absolute w-[150px] bg-nsei-500 rounded-lg flex flex-col text-white font-bold">
        Aperte no botão confirmar e depois aperte em apagar usuário novamente
        para confirmar a deleção
        <button
          onClick={() => {
            props.setConfirmDelete(true);
          }}
          className="bg-red-500 hover:bg-red-800 text-white font-bold rounded-xl transition-all"
        >
          {" "}
          confirmar
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
