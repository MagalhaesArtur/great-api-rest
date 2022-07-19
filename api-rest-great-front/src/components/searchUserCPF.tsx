import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./loading";

import { validCPF } from "../utils/regex";

function SearchUserCPF() {
  const [cpf1, setCpf] = useState("");
  const [cpfList, setCpfList] = useState([]);

  useEffect(() => {
    setLoading2(true);

    const lista = cpfList.filter(({ cpf }) => {
      return cpf == cpf1;
    });
    setCpfList1(lista);

    setLoading2(false);
  }, [cpfList]);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [cpfList1, setCpfList1] = useState([]);

  const [cpfErr, setCpfErr] = useState(false);
  console.log(cpfErr, cpfList1);

  const validate = () => {
    if (!validCPF.test(cpf1)) {
      setCpfErr(true);
    } else {
      setCpfErr(false);
    }
  };

  useEffect(() => {
    validate();
  }, [cpf1]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex justify-around w-[90%] h-[100vh] flex-col gap-y-5">
        <form
          className="flex flex-col "
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
          <div className="flex mb-4 flex-col w-full">
            <label
              className="text-white mb-1 font-bold text-base"
              htmlFor="cpf"
            >
              Insira o CPF de algum usuário:{" "}
            </label>
            <InputMask
              required
              id="cpf"
              name="cpf"
              mask="999.999.999-99"
              className="bg-nsei-500 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin-500"
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
              if (!cpfErr) {
                setLoading(true);

                try {
                  await axios
                    .get(import.meta.env.VITE_API_URL + "/user", {
                      data: { cpf1 },
                    })
                    .then((response) => {
                      setCpfList(response.data);

                      setLoading2(true);

                      const lista = cpfList.filter(({ cpf }) => {
                        return cpf == cpf1;
                      });
                      setCpfList1(lista);

                      setLoading2(false);
                    });
                } catch (error) {
                  console.log(error);
                }
                setLoading(false);
              }
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
              <div>NENHUM USUÁRIO ENCONTRADO</div>
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

export default SearchUserCPF;
