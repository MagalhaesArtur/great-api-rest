import { useNavigate } from "react-router-dom";

function MainPageButtons() {
  const opitions = [
    "Cadastrar Novo Usuário",
    "Deletar Usuário",
    "Consultar Usuário por CPF ou RG",
    "Buscar Usuário(s) por Nome",
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-5">
      {opitions.map((option) => (
        <button
          onClick={() => {
            setTimeout(() => {
              if (option == "Cadastrar Novo Usuário") {
                navigate("/register");
              }
              if (option == "Deletar Usuário") {
                navigate("/delete");
              }
              if (option == "Consultar Usuário por CPF ou RG") {
                navigate("/cpf");
              }
              if (option == "Buscar Usuário(s) por Nome") {
                navigate("/name");
              }
            }, 500);
          }}
          className="bg-red-600 px-9"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default MainPageButtons;
