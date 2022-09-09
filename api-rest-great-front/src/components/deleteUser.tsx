import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmDelete from "./confirmDelete";
import Loading from "./loading";

interface teste {
  teste1: boolean;
}

function DeleteUser() {
  const [users, setUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState("");

  const [loading, setLoading] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmDeleteAux, setConfirmDeleteAux] = useState(false);

  console.log(confirmDelete);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/delete").then((response) => {
      setUsers(response.data.users);
    });
  }, [loading]);

  useEffect(() => {}, [confirmDelete]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-col min-w-[100%] ">
        <div className="flex flex-col h-[70vh] overflow-x-scroll items-center  overflow-y-scroll gap-y-11">
          <div className="flex gap-x-4 w-full  text-white font-bold text-sm">
            <div className=" whitespace-nowrap flex justify-center  w-[15%]">
              NOME
            </div>
            <div className=" whitespace-nowrap flex justify-center  w-[15%]">
              RG
            </div>
            <div className=" whitespace-nowrap flex justify-center  w-[15%]">
              CPF
            </div>
            <div className=" whitespace-nowrap flex justify-center  w-[15%]">
              D. DE CADASTRO
            </div>
            <div className=" whitespace-nowrap flex justify-center  w-[15%]">
              NOME DA MÃE
            </div>
            <div className=" whitespace-nowrap flex justify-center  w-[15%]">
              D. DE NASCIMENTO
            </div>
          </div>
          {users.map((user: any) => (
            <div className="flex w-[100%] gap-x-6 text-verdin-500 mb-3">
              <div className="text-center w-[15%]">{user.nome}</div>
              <div className="text-center w-[15%]">{user.rg}</div>
              <div className="text-center w-[15%]">{user.cpf}</div>
              <div className="text-center w-[15%]">{user.datacadas}</div>
              <div className="text-center w-[15%]">{user.nomemae}</div>
              <div className="text-center w-[15%]">{user.datanasc}</div>
              <div className="flex gap-x-2">
                <button
                  className="bg-red-500 hover:bg-red-800 text-white font-bold rounded-xl transition-all"
                  onClick={async () => {
                    setConfirmDeleteAux(true);

                    if (confirmDelete) {
                      setLoading(true);

                      setLoading(false);
                      setConfirmDelete(false);
                      setConfirmDeleteAux(false);
                    }
                  }}
                >
                  apagar usuário
                </button>
              </div>
            </div>
          ))}
        </div>
        {confirmDeleteAux ? (
          <ConfirmDelete
            cpf={userToDelete}
            setConfirmDelete={setConfirmDelete}
            setConfirmDeleteAux={setConfirmDeleteAux}
          />
        ) : undefined}
      </div>
    );
  }
}

export default DeleteUser;
