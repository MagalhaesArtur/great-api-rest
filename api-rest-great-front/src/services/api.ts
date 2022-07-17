import axios from "axios";

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const createUser = async ({
  nome,
  cpf,
  rg,
  dataNasc,
  nomeMae,
  dataCadas,
}: any) => {
  await api.post("/user", { nome, cpf, rg, dataNasc, nomeMae, dataCadas });
};

export const deleteUser = async ({ cpf }: any) => {
  console.log({ cpf });
  const deletedUser = await api.delete("/delete");
  console.log(deletedUser);
};

export const listUsersCPF = async () => {
  const users = await api.get("/delete");
  return users;
};
