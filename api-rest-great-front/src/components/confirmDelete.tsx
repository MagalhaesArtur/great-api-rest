import axios from "axios";

function ConfirmDelete(props: {
  cpf: string;
  setLoading: any;
  setConfirmDelete: any;
  setConfirmDeleteAux: any;
}) {
  return (
    <div className="right-[50vw] top-[50vh]  absolute w-[200px] h-[200px] p-4 bg-nsei-500 rounded-lg flex justify-between flex-col text-white text-justify font-bold">
      Aperte em Confirmar para deletar o usuário
      <button
        onClick={async () => {
          console.log(props.cpf);
          props.setLoading(false);
          await axios
            .delete(import.meta.env.VITE_API_URL + "/delete", {
              data: { cpf: props.cpf },
            })
            .then((response) => {
              console.log(response.data);
              props.setConfirmDeleteAux(false);
            });
        }}
        className="bg-red-500 hover:bg-red-800 text-white font-bold rounded-md  transition-all"
      >
        {" "}
        confirmar
      </button>
    </div>
  );
}

export default ConfirmDelete;
