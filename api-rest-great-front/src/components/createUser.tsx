import { useState } from "react";
import InputMask from "react-input-mask";
import { validCPF } from "../utils/regex";
import { validRG } from "../utils/regex";

import { createUser } from "../services/api";

function CreateUser() {
  const [nome, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [datanasc, setNasc] = useState("");
  const [nomemae, setNameMae] = useState("");
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
      className="w-[95vw] p-8 flex  flex-col gap-y-5 sm:w-[70vw]"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!cpfErr) {
          try {
            await createUser({
              nome,
              cpf,
              rg,
              datanasc,
              nomemae,
              datacadas: new Date(),
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
      <label className="text-white text-base font-bold" htmlFor="name">
        Insira o nome do usuário a ser cadastrado:{" "}
      </label>
      <input
        required
        id="name"
        name="name"
        className="bg-nsei-500 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin"
        type="text"
        value={nome}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label className="text-base text-white font-bold" htmlFor="cpf">
        Insira o CPF do usuário a ser cadastrado:{" "}
      </label>
      <InputMask
        required
        id="cpf"
        name="cpf"
        mask="999.999.999-99"
        className="bg-nsei-500 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin"
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
        className="bg-verdin-500 font-bold rounded-lg border-2 sm:w-[150px] border-transparent text-roxin-500  w-[100px] hover:text-verdin-500 hover:bg-nsei-500 transition-all hover:border-verdin-500"
      >
        limpar CPF
      </button>

      <label className="text-base text-white font-bold" htmlFor="rg">
        Insira o RG do usuário a ser cadastrado:{" "}
      </label>
      <InputMask
        required
        id="rg"
        name="rg"
        mask="9999999999-*"
        className="bg-nsei-500 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin"
        type="text"
        value={rg}
        onChange={(e) => {
          setRg(e.target.value);
        }}
      />
      {rgErr && <p>digite um RG válido</p>}
      <button
        type="button"
        onClick={(e) => {
          setRg("");
        }}
        className="bg-verdin-500 font-bold rounded-lg border-2 sm:w-[150px] border-transparent text-roxin-500  w-[100px] hover:text-verdin-500 hover:bg-nsei-500 transition-all hover:border-verdin-500"
      >
        limpar RG
      </button>
      <label className="text-white text-base font-bold" htmlFor="dataNasc">
        Insira a data de nascimento do usuário a ser cadastrado:{" "}
      </label>
      <input
        required
        type="date"
        name="dataNasc"
        id="dataNasc"
        className="bg-nsei-500 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin"
        value={datanasc}
        onChange={(e) => {
          setNasc(e.target.value);
        }}
      />

      <label className="text-base text-white font-bold" htmlFor="nameMae">
        Insira o nome da mãe do usuário a ser cadastrado:{" "}
      </label>
      <input
        required
        id="nameMae"
        name="nameMae"
        className="bg-nsei-500 p-2 rounded-xl border-2 border-transparent outline-none transition-all text-white hover:border-verdin-500 active:border-verdin-500 focus:border-verdin"
        type="text"
        value={nomemae}
        onChange={(e) => {
          setNameMae(e.target.value);
        }}
      />

      <button
        type="submit"
        onClick={(e) => {
          validate();
        }}
        className="bg-verdin-500 font-bold h-[70px] rounded-lg border-2 border-transparent text-roxin-500  w-[200px] hover:text-verdin-500 hover:bg-nsei-500 transition-all hover:border-verdin-500"
      >
        ENVIAR
      </button>
    </form>
  );
}

export default CreateUser;
