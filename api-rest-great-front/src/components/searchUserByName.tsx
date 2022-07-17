import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";

function SearchUserByName() {
  const [name1, setName] = useState("");
  const [nameList, setNameList] = useState([]);

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
            .get("http://localhost:3333/user", {
              data: { name1 },
            })
            .then((response) => {
              setNameList(response.data);
            });
        }}
      >
        <label htmlFor="cpf">Insira o nome: </label>
        <input
          required
          id="cpf"
          name="cpf"
          className="bg-slate-200"
          type="text"
          value={name1}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {cpfErr && <p>digite um CPF válido</p>}
        <button
          type="submit"
          className="w-[200px] h-[100px] bg-red-700"
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
        ></button>
      </form>
      <div className="w-[70%] ">
        {cpfList1.map((user) => (
          <div>
            <div>{user.nome}</div>
            <div>{user.dataNasc}</div>
            <div>{user.dataCadas}</div>
            <div>{user.nomeMae}</div>
            <div>{user.rg}</div>
            <div>{user.cpf}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchUserByName;
