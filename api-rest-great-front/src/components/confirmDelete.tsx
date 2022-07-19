function ConfirmDelete(props: any) {
  return (
    <div className="text-center right-[50vw] top-[50vh] absolute w-[150px] bg-nsei-500 rounded-lg flex flex-col text-white font-bold">
      Aperte no botão confirmar e depois aperte em apagar usuário novamente para
      confirmar a deleção
      <button
        onClick={() => {
          props.setConfirmDelete(true);
          props.setConfirmDeleteAux(false);
        }}
        className="bg-red-500 hover:bg-red-800 text-white font-bold rounded-xl transition-all"
      >
        {" "}
        confirmar
      </button>
    </div>
  );
}

export default ConfirmDelete;
