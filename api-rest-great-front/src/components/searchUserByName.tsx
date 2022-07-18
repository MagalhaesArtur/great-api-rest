import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";

function SearchUserByName() {
  const [name1, setName] = useState("");
  const [nameList, setNameList]: any = useState([]);

  const [cpfList1, setCpfList1]: any = useState([]);

  const [cpfErr, setCpfErr] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex w-[70%] flex-col gap-y-5">
      <form
        className="flex flex-col"
        onSubmit={async (e) => {
          e.preventDefault();
          await axios
            .get(import.meta.env.VITE_API_URL + "/user", {
              data: { name1 },
            })
            .then((response) => {
              setNameList(response.data);
            });
        }}
      >
        <label className="text-white mb-1 font-bold text-base" htmlFor="cpf">
          Insira o nome de algum usuário (completo ou parte do nome):{" "}
        </label>
        <input
          required
          id="cpf"
          name="cpf"
          className="bg-nsei-500 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin-500"
          type="text"
          value={name1}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {cpfErr && <p>digite um CPF válido</p>}
        <button
          type="submit"
          className="p-2 w-[150px] rounded-xl font-bold bg-verdin-500 border-2 border-transparent text-roxin-500 hover:bg-nsei-500 hover:border-verdin-500 hover:text-verdin-500 transition-all"
          onClick={() => {
            let lista: any = Array([]);
            for (let user of nameList) {
              let lista1 = user.nome.split(" ");
              for (let nome of lista1) {
                if (nome == name1) {
                  lista.push(user);
                }
              }
            }

            setCpfList1(lista);
          }}
        >
          CONSULTAR
        </button>
      </form>
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
          {cpfList1.map((user: any) => (
            <div className="flex w-[100%] gap-x-6 text-verdin-500 mb-3">
              <div className="text-center w-[15%]">{user.nome}</div>
              <div className="text-center w-[15%]">{user.rg}</div>
              <div className="text-center w-[15%]">{user.cpf}</div>
              <div className="text-center w-[15%]">{user.datacadas}</div>
              <div className="text-center w-[15%]">{user.nomemae}</div>
              <div className="text-center w-[15%]">{user.datanasc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchUserByName;
