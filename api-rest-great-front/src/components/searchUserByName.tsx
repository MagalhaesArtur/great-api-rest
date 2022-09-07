import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./loading";

function SearchUserByName() {
  const [name1, setName] = useState("");
  const [nameList, setNameList]: any = useState([]);

  const [cpfList1, setCpfList1]: any = useState([]);

  const [aux, setAux2] = useState(false);

  console.log(cpfList1.lenght, aux);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    setLoading2(true);
    setAux2(true);

    let lista: any = [];
    for (let user of nameList) {
      let lista1 = user.nome.split(" ");
      for (let nome of lista1) {
        if (nome == name1) {
          lista.push(user);
        }
      }
    }
    setCpfList1(lista);

    if (lista.length != 0) {
      setAux2(false);
    }

    setLoading2(false);
  }, [nameList]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex w-[90%] flex-col gap-y-5">
        <form
          className="flex flex-col"
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
          <label className=" text-white mb-2 font-bold text-base" htmlFor="cpf">
            Insira o nome de algum usuário (completo ou parte do nome):{" "}
          </label>
          <input
            required
            id="cpf"
            name="cpf"
            className="bg-nsei-500 mb-2 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin-500"
            type="text"
            value={name1}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="p-2  w-[150px] rounded-xl font-bold bg-verdin-500 border-2 border-transparent text-roxin-500 hover:bg-nsei-500 hover:border-verdin-500 hover:text-verdin-500 transition-all"
            onClick={async () => {
              setLoading(true);
              setAux2(true);
              try {
                await axios
                  .get("https://great-api-rest-production" + "/user", {
                    data: { name1 },
                  })
                  .then((response) => {
                    setNameList(response.data);

                    setLoading2(true);

                    let lista: any = [];
                    for (let user of nameList) {
                      let lista1 = user.nome.split(" ");
                      for (let nome of lista1) {
                        if (nome == name1) {
                          lista.push(user);
                        }
                      }
                    }
                    setCpfList1(lista);

                    if (lista.length != 0) {
                      setAux2(false);
                    }

                    setLoading2(false);
                  });
              } catch (error) {
                console.log(error);
              }
              setLoading(false);
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
            {cpfList1.length == 0 ? (
              aux ? (
                <div className="text-verdin-500 text-lg font-bold">
                  NENHUM USUÁRIO ENCONTRADO
                </div>
              ) : undefined
            ) : !loading2 ? (
              cpfList1.map((user: any) => (
                <div className="flex w-[100%] gap-x-6 text-verdin-500 mb-3">
                  <div className="text-center w-[15%]">{user.nome}</div>
                  <div className="text-center w-[15%]">{user.rg}</div>
                  <div className="text-center w-[15%]">{user.cpf}</div>
                  <div className="text-center w-[15%]">{user.datacadas}</div>
                  <div className="text-center w-[15%]">{user.nomemae}</div>
                  <div className="text-center w-[15%]">{user.datanasc}</div>
                </div>
              ))
            ) : undefined}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchUserByName;
