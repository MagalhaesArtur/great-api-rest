import { useState } from "react";
import InputMask from "react-input-mask";
import { validCPF } from "../utils/regex";

function CreateUser() {
  const [cpf, setCpf] = useState("");

  const [cpfErr, setCpfErr] = useState(false);

  console.log(cpf);
  const validate = () => {
    if (!validCPF.test(cpf)) {
      setCpfErr(true);
    } else {
      setCpfErr(false);
    }
  };
  return (
    <form className="w-[400px]  flex flex-col gap-y-5">
      <InputMask
        mask="999.999.999-99"
        className="bg-slate-200"
        type="text"
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
      />
      {cpfErr && <p>digite um cpf válido</p>}
      <button
        onClick={(e) => {
          e.preventDefault();
          validate();
        }}
        className="bg-black w-[100px]"
      >
        enviar
      </button>
    </form>
  );
}

export default CreateUser;
