import { useState } from "react";
import InputMask from "react-input-mask";
import { validCPF } from "../utils/regex";
import { validRG } from "../utils/regex";

import { createUser } from "../services/api";

function CreateUser() {
  const [nome, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [dataNasc, setNasc] = useState("");
  const [nomeMae, setNameMae] = useState("");
  console.log(cpf);

  const [cpfErr, setCpfErr] = useState(false);
  const [rgErr, setRgErr] = useState(false);
  console.log(cpfErr, rgErr);

  const validate = () => {
    if (!validCPF.test(cpf)) {
      setCpfErr(true);
    } else {
      setCpfErr(false);
    }
  };

  return (
    <form
      className="w-[400px]  flex flex-col gap-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!cpfErr) {
          try {
            await createUser({
              nome,
              cpf,
              rg,
              dataNasc,
              nomeMae,
              dataCadas: new Date(),
            });
            setRg("");
            setCpf("");
            setName("");
            setNameMae("");
            setNasc("");
          } catch (error) {
            console.log(error);
          }
        }
      }}
    >
      <label htmlFor="name">Insira o seu nome: </label>
      <input
        required
        id="name"
        name="name"
        className="bg-slate-200"
        type="text"
        value={nome}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label htmlFor="cpf">Insira o seu CPF: </label>
      <InputMask
        required
        id="cpf"
        name="cpf"
        mask="999.999.999-99"
        className="bg-slate-200"
        type="text"
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value.replaceAll(/[^0-9]/g, ""));
        }}
      />
      {cpfErr && <p>digite um CPF válido</p>}

      <button
        type="button"
        onClick={(e) => {
          setCpf("");
        }}
        className="bg-black w-[100px] text-orange-400"
      >
        limpar CPF
      </button>

      <label htmlFor="rg">Insira o seu RG: </label>
      <InputMask
        required
        id="rg"
        name="rg"
        mask="9999999999-*"
        className="bg-slate-200"
        type="text"
        value={rg}
        onChange={(e) => {
          setRg(e.target.value);
        }}
      />
      {rgErr && <p>digite um RG válido</p>}

      <label htmlFor="dataNasc">Insira sua data de nascimento: </label>
      <input
        required
        type="date"
        name="dataNasc"
        id="dataNasc"
        className="bg-slate-200"
        value={dataNasc}
        onChange={(e) => {
          setNasc(e.target.value);
        }}
      />

      <label htmlFor="nameMae">Insira o nome da mãe: </label>
      <input
        required
        id="nameMae"
        name="nameMae"
        className="bg-slate-200"
        type="text"
        value={nomeMae}
        onChange={(e) => {
          setNameMae(e.target.value);
        }}
      />

      <button
        type="submit"
        onClick={(e) => {
          validate();
        }}
        className="bg-black w-[100px] text-orange-400"
      >
        enviar
      </button>
    </form>
  );
}

export default CreateUser;
