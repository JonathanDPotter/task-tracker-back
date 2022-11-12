import { Request, Response } from "express";
import { Error } from "mongoose";
// interfaces
import Itask from "../interfaces/task";
// models
import Task from "../models/task";

const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error: unknown) {
    const { message } = error as Error;
    console.error(message, error);
    return res.status(500).json({ message, error });
  }
};

const getTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params._id);
    return res.status(200).json(task);
  } catch (error: unknown) {
    const { message } = error as Error;
    console.error(message, error);
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const task = req.body as Itask;
    const newTask = new Task(task);
    return newTask
      .save()
      .then(() => res.status(201).json({ message: "success" }))
      .catch((error: Error) =>
        res.status(500).json({ message: error.message })
      );
  } catch (error: unknown) {
    const { message } = error as Error;
    console.error(message, error);
    return res.status(500).json({ message, error });
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params, req.body, {
      new: true,
    });
    return res.status(200).json(task);
  } catch (error: unknown) {
    const { message } = error as Error;
    console.error(message, error);
    return res.status(500).json({ message, error });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndDelete(req.params);
    return res.status(200).json(task);
  } catch (error: unknown) {
    const { message } = error as Error;
    console.error(message, error);
    return res.status(500).json({ message, error });
  }
};

const controller = { getTasks, getTask, createTask, updateTask, deleteTask };

export default controller;
