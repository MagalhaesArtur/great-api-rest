import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";

function SearchUserCPF() {
  const [cpf1, setCpf] = useState("");
  const [cpfList, setCpfList] = useState([]);

  const [cpfList1, setCpfList1] = useState([]);

  const [cpfErr, setCpfErr] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-[70%] h-[100vh] flex-col gap-y-5">
      <form
        className="flex flex-col "
        onSubmit={async (e) => {
          e.preventDefault();
          await axios
            .get(import.meta.env.VITE_API_URL + "/user", {
              data: { cpf1 },
            })
            .then((response) => {
              setCpfList(response.data);
            });
        }}
      >
        <div className="flex mb-4 flex-col w-full">
          <label className="text-white mb-1 font-bold text-base" htmlFor="cpf">
            Insira o CPF de algum usuário:{" "}
          </label>
          <InputMask
            required
            id="cpf"
            name="cpf"
            mask="999.999.999-99"
            className="bg-nsei-500 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin"
            type="text"
            value={cpf1}
            onChange={(e) => {
              setCpf(e.target.value.replaceAll(/[^0-9]/g, ""));
            }}
          />
        </div>
        {cpfErr && <p>digite um CPF válido</p>}
        <button
          type="submit"
          className="p-2 w-[150px] rounded-xl font-bold bg-verdin-500 border-2 border-transparent text-roxin-500 hover:bg-nsei-500 hover:border-verdin-500 hover:text-verdin-500 transition-all"
          onClick={async () => {
            const lista = cpfList.filter(({ cpf }) => {
              return cpf == cpf1;
            });
            setCpfList1(lista);
          }}
        >
          CONSULTAR
        </button>
      </form>
      <div className="w-[70%] ">
        {cpfList1.map((user: any) => (
          <div>
            <div>{user.nome}</div>
            <div>{user.datanasc}</div>
            <div>{user.datacadas}</div>
            <div>{user.nomemae}</div>
            <div>{user.rg}</div>
            <div>{user.cpf}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchUserCPF;
