import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";

function DeleteUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/delete").then((response) => {
      setUsers(response.data.users);
    });
  }, [loading]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-col h-[70vh]  items-center w-[80vw] overflow-y-scroll gap-y-11">
        {users.map((user: any) => (
          <div className="flex w-[100%] gap-x-6 ">
            <div className="w-[15%]">{user.nome}</div>
            <div className="w-[15%]">{user.rg}</div>
            <div className="w-[15%]">{user.cpf}</div>
            <div className="w-[15%]">{user.datacadas}</div>
            <div className="w-[15%]">{user.nomemae}</div>
            <div className="w-[15%]">{user.datanasc}</div>
            <button
              className="bg-red-700"
              onClick={async () => {
                setLoading(true);

                await axios
                  .delete(import.meta.env.VITE_API_URL + "/delete", {
                    data: { cpf: user.cpf },
                  })
                  .then((response) => {
                    console.log(response.data);
                  });

                setLoading(false);
              }}
            >
              apagar usuário
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default DeleteUser;
