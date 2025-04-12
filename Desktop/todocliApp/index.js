import { Command } from "commander";
import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import Table from "cli-table3";
import chalk from "chalk";



const program = new Command();
const client = new PrismaClient();

program
  .name(" Todo CLI App")
  .description("Manage your todo list")
  .version("1.0.0");

const newTodo = program.command("add-todo");
newTodo.description("Add a new todo");
newTodo.requiredOption("-t, --title <value>", "Title of the todo");
newTodo.requiredOption("-d, --description <value>", "Description of the todo");
newTodo.requiredOption("-s, --status <value>", "Status of the todo");

newTodo.action(async (options) => {
  try {
    const todo = await client.todo.create({
      data: {
        id: nanoid(4),
        todoTitle: options.title,
        todoDescription: options.description,
        todoStatus: options.status,
      },
    });
    console.log(chalk.bgGreen("Todo created successfully ✔✔✔✔✔"));

    const table = new Table({
      head: ["ID", "Title", "Description", "Status"],
    });

    table.push([
      todo.id,
      todo.todoTitle,
      todo.todoDescription,
      todo.todoStatus,
    ]);
    console.log(table.toString());
  } catch (error) {
    console.log(chalk.bgRed("There was an erro creating the todo", error));
  }
});

const readTodos = program.command("read-todos");
readTodos.description("Read a specific todo");
readTodos.option("-i, --id <value>", "ID of the todo");

readTodos.action(async (options) => {
  try {
   const id = options.id;

    if (id) {
      const todo = await client.todo.findFirst({
        where: {
          id
        },
      });
      if(!todo){
        console.log(chalk.bgRed(`Todo with id ${id} not found`));
        return;
      }
      const table = new Table({
        head: ["ID", "Title", "Description", "Status"],
      });

      table.push([
        todo.id,
        todo.todoTitle,
        todo.todoDescription,
        todo.todoStatus,
      ]);
      console.log(table.toString());
    } else {
      const todos = await client.todo.findMany();
      const table = new Table({
        head: ["ID", "Title", "Description", "Status"],
      });

      todos.forEach((todo) => {
        table.push([
          todo.id,
          todo.todoTitle,
          todo.todoDescription,
          todo.todoStatus,
        ]);
      });
      console.log(table.toString());
      
    }
  } catch (error) {
    console.log(chalk.bgRed("There was an error reading the todos", error));
  }
});

program
.command("update-todo")
.description("Update a specific todo")
.requiredOption("-i, --id <value>", "ID of the todo")
.option("-t, --title <value>", "Title of the todo")
.option("-d, --description <value>", "Description of the todo")
.option("-s, --status <value>", "Status of the todo")

updateTodo.action(async function (options){
  
  const newTittle = options.title;
  const newDescription = options.description;
  const newStatus = options.status;
  try {
    const updatedTodo = await client.todo.update({
      where:{
        id: options.id
      },
      data: {
        todoTitle: newTittle && newTittle,
        todoDescription: newDescription && newDescription,
        todoStatus: newStatus && newStatus,
      },
      });
      console.log(chalk.bgGreen("Todo with id " + options.id + " updated successfully ✔✔✔✔✔"));
     
} catch (error) {
    console.log(chalk.bgRed("There was an error updating the todo", error));
  }
});

program.parseAsync();
