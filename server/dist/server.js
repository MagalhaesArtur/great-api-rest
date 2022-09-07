"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const prisma_1 = require("./prisma");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const porta = 7227;
app.use(express_1.default.json());
app.post("/user", async (req, res) => {
  const { nome, cpf, rg, datanasc, nomemae, datacadas } = req.body;
  const register = await prisma_1.prisma.registro.create({
    data: {
      nome,
      cpf,
      rg,
      datanasc,
      nomemae,
      datacadas,
    },
  });
  return res.status(201).json({ data: register });
});
app.delete("/delete", async (req, res) => {
  const { cpf } = req.body;
  const deletedUser = await prisma_1.prisma.registro.delete({ where: { cpf } });
  return res.status(200).json({ data: deletedUser });
});
app.get("/delete", async (req, res) => {
  const users = await prisma_1.prisma.registro.findMany();
  return res.status(200).json({ users });
});
app.get("/user", async (req, res) => {
  const cpf = req.params;
  const register = await prisma_1.prisma.registro.findMany({
    where: { cpf },
  });
  res.json(register);
});
app.get("/users", async (req, res) => {
  const { nome } = req.body;
  const register = await prisma_1.prisma.registro.findMany({
    where: { nome },
  });
  res.json(register);
});
app.listen(porta, () => {
  console.log("servidor rodando na porta " + porta);
});
