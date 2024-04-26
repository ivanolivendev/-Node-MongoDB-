import express from "express";
import { EmployeeModel } from "../db/Employee";
import { Model } from "mongoose";

export class EmployeeContoller {
  getAllEmployee = async (req: express.Request, res: express.Response) => {
    try {
      const employees = await EmployeeModel.find();
      return res.status(200).json({ data: employees });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  getEmployee = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
      const employee = await EmployeeModel.findById(id);
      return res.status(200).json({ data: id });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  createEmployee = async (req: express.Request, res: express.Response) => {
    try {
      const { name, email, mobile, dob, doj } = req.body;
      const createdEmployee = await EmployeeModel.create({
        name,
        email,
        mobile,
        dob,
        doj,
      });
      return res
        .status(200)
        .json({ msg: "Employee Created", data: createdEmployee });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  updateEmployee = async (req: express.Request, res: express.Response) => {
    try {
      const { name, email, mobile, dob, doj } = req.body;
      const { id } = req.params;

      const employee = await EmployeeModel.findById(id);
      if (employee) {
        employee.name = name;
        employee.email = email;
        employee.mobile = mobile;
        employee.dob = dob;
        employee.doj = doj;
      }

      await employee.save();
      return res.status(200).json({ msg: "Employee Updated", data: employee });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  deleteEmployee = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
      await EmployeeModel.findByIdAndDelete({ _id: id });

      return res.status(200).json({ msg: `The employee was deleted` });
    } catch (error) {
      return res.sendStatus(400);
    }
  };
}

export default new EmployeeContoller();
