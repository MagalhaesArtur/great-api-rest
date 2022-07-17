import express from "express";
import cors from "cors";
import { prisma } from "./prisma";

const app = express();
const porta = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.post("/user", async (req, res) => {
  const { nome, cpf, rg, dataNasc, nomeMae, dataCadas } = req.body;

  const register = await prisma.registro.create({
    data: {
      nome,
      cpf,
      rg,
      dataNasc,
      nomeMae,
      dataCadas,
    },
  });

  return res.status(201).json({ data: register });
});

app.delete("/delete", async (req, res) => {
  const { cpf } = req.body;

  const deletedUser = await prisma.registro.delete({ where: { cpf } });

  return res.status(200).json({ data: deletedUser });
});

app.get("/delete", async (req, res) => {
  const users = await prisma.registro.findMany();

  return res.status(200).json({ users });
});

app.get("/user", async (req, res) => {
  const cpf = req.params;

  const register = await prisma.registro.findMany({
    where: { cpf },
  });
  res.json(register);
});

app.get("/users", async (req, res) => {
  const { nome } = req.body;

  const register = await prisma.registro.findMany({
    where: { nome },
  });
  res.json(register);
});

app.listen(porta, () => {
  console.log("servidor rodando na porta " + porta);
});
