import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";

function SearchUserCPF() {
  const [cpf1, setCpf] = useState("");
  const [cpfList, setCpfList] = useState([]);

  const [cpfList1, setCpfList1] = useState([]);

  const [cpfErr, setCpfErr] = useState(false);
  console.log(cpfList1, "cu");
  const navigate = useNavigate();

  return (
    <div className="flex w-[70%] flex-col gap-y-5">
      <form
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
        <label htmlFor="cpf">Insira o seu CPF: </label>
        <InputMask
          required
          id="cpf"
          name="cpf"
          mask="999.999.999-99"
          className="bg-slate-200"
          type="text"
          value={cpf1}
          onChange={(e) => {
            setCpf(e.target.value.replaceAll(/[^0-9]/g, ""));
          }}
        />
        {cpfErr && <p>digite um CPF válido</p>}
        <button
          type="submit"
          className="w-[200px] h-[100px] bg-red-700"
          onClick={async () => {
            const lista = cpfList.filter(({ cpf }) => {
              return cpf == cpf1;
            });
            setCpfList1(lista);
          }}
        ></button>
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
