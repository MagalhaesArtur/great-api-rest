import axios from "axios";

export const api = axios.create({
  baseURL: "https://great-api-rest-production/",
});

export const createUser = async ({
  nome,
  cpf,
  rg,
  datanasc,
  nomemae,
  datacadas,
}: any) => {
  await api.post("/user", { nome, cpf, rg, datanasc, nomemae, datacadas });
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
