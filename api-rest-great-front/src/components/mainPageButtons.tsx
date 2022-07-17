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
    <div className="flex flex-col gap-y-10">
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
                navigate("/user");
              }
              if (option == "Buscar Usuário(s) por Nome") {
                navigate("/users");
              }
            }, 500);
          }}
          className="bg-verdin-500 p-4 w-[80vw] rounded-xl h-[70px] border-2 border-transparent text-roxinescuro-500 text-base font-bold hover:border-verdin-500 hover:bg-roxin-500 hover:text-verdin-500 transition-all hover:shadow-daora"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default MainPageButtons;
