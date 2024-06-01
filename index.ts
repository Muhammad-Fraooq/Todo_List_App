import inquirer from 'inquirer'

//? todos array = Done
//? function = Done
//? operation = Done

let todos: string[] = ["Muhammad","Ukasha","Ahmed"]

async function createTodo(todos: string[]) {

    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an Operation",
            name: "Select",
            choices: ["view","add", "update", "delete"]
        })
        // console.log(ans);
        if (ans.Select == "view") {
            console.log(todos);

        }
        if (ans.Select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item in todo...",
                name: "todo"
            })
            todos.push(addTodo.todo)
            console.log(todos);
        }
        if (ans.Select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select item for todos...",
                name: "todo",
                choices: todos.map(item => item)
            })
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item in todo...",
                name: "todo"
            })
            let newTodo = todos.filter(val => val != updateTodo.todo)
            todos = [...newTodo, addTodo.todo]
            console.log(todos);
        }
        if (ans.Select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select item for todos...",
                name: "todo",
                choices: todos.map(item => item)
            })
            let newTodo = todos.filter(val => val != deleteTodo.todo)
            todos = [...newTodo]
            console.log(todos);

        }

    } while (true);

}
createTodo(todos)