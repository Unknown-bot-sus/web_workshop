import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../database";

export const createTodo = async (req: Request, res: Response) => {
  const todo = await prisma.todo.create({
    data: req.body,
  });

  res.status(StatusCodes.CREATED).send({
    todo,
  });
};

export const getTodos = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany({});

  res.status(StatusCodes.OK).send({
    todos,
  });
};

export const updateTodo = async (req: Request, res: Response) => {
  const todo = await prisma.todo.update({
    where: {
      id: Number(req.params.id),
    },
    data: req.body,
  });

  res.status(StatusCodes.OK).send({
    todo,
  });
};

export const deleteTodo = async (req: Request, res: Response) => {
  const todo = await prisma.todo.delete({
    where: {
      id: Number(req.params.id),
    },
  });

  res.status(StatusCodes.NO_CONTENT).send();
};
