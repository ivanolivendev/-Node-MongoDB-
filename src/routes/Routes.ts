import express from "express";
import EmployeeController from "../controllers/EmployeeController";

const router = express.Router();

// Rota para obter todos os funcionários
router.get("/employee", EmployeeController.getAllEmployee);

// Rota para obter um funcionário específico pelo ID
router.get("/employee/:id", EmployeeController.getEmployee);

// Rota para criar um novo funcionário
router.post("/employee", EmployeeController.createEmployee);

// Rota para atualizar um funcionário existente pelo ID
router.put("/employee/:id", EmployeeController.updateEmployee);

// Rota para deletar um funcionário pelo ID
router.delete("/employee/:id", EmployeeController.deleteEmployee);

export default router;
