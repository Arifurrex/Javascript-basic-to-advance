// let todo1 = 'Get groceries';
// let todo2 = 'Wash car';
// let todo3 = 'Make dinner';

// let element = document.createElement('div');
// element.innerText = todo1;
// document.body.appendChild(element);

// element = document.createElement('div');
// element.innerText = todo2;
// document.body.appendChild(element);

// element = document.createElement('div');
// element.innerText = todo3;
// document.body.appendChild(element);


// ? function
// let todo1 = 'Get groceries';
// let todo2 = 'Wash car';
// let todo3 = 'Make dinner';

// function addTodo(todoTitle) {
//     element = document.createElement('div');
//     element.innerText = todoTitle;
//     document.body.appendChild(element);
// }
// console.log(addTodo(todo1));
// console.log(addTodo(todo2));
// console.log(addTodo(todo3));

// ? array and forEach method
// const ListTodo= ['Get groceries', 'Wash car', ' Make dinner'];

// ListTodo.forEach(function (todoTitle) {
//     element = document.createElement('div');
//     element.innerText = todoTitle;
//     document.body.appendChild(element);
// });


//? array method
// const ListTodo = ['Get groceries', 'Wash car', ' Make dinner'];
// ListTodo.push('new element');

// ListTodo.forEach(function (todoTitle) {
//     element = document.createElement('div');
//     element.innerText = todoTitle;
//     document.body.appendChild(element);
// });

// ? when click addTodo boutton, input value will pass in array by push method
// const ListTodo = ['Get groceries', 'Wash car', ' Make dinner'];
// ListTodo.push('new element');

// ListTodo.forEach(function (todoTitle) {
//     element = document.createElement('div');
//     element.innerText = todoTitle;
//     document.body.appendChild(element);
// });
// function addTodo() {
//     let textBox = document.getElementById('todo-title');
//     let title = textBox.value;
//     ListTodo.push(title);
// }
// console.log(ListTodo);

//! warning :here in display input value not shown

// ? IN html create a div class name todo-list and select iby id and set it empty
// const ListTodo = ['Get groceries', 'Wash car', ' Make dinner'];
// ListTodo.push('new element');

// ListTodo.forEach(function (todoTitle) {
//     element = document.createElement('div');
//     element.innerText = todoTitle;
//     document.body.appendChild(element);
// });
// function addTodo() {
//     let textBox = document.getElementById('todo-title');
//     let title = textBox.value;
//     ListTodo.push(title);

//     document.getElementById('todo-list').innerHTML = '';
//     ListTodo.forEach(function (todoTitle) {
//         element = document.createElement('div');
//         element.innerText = todoTitle;
//         document.body.appendChild(element);
//     });
// }
// console.log(ListTodo);

// ! listTodo array need to empty before push


//? for more shorter make todo list in a render function

// const ListTodo = ['Get groceries', 'Wash car', ' Make dinner'];
// ListTodo.push('new element');

// render();
// function addTodo() {
//     let textBox = document.getElementById('todo-title');
//     let title = textBox.value;
//     ListTodo.push(title);

//     render();
// }
// function render() {
//     document.getElementById('todo-list').innerHTML = '';
//     ListTodo.forEach(function (todoTitle) {
//         element = document.createElement('div');
//         element.innerText = todoTitle;
//         document.body.appendChild(element);
//     });
// }
// console.log(ListTodo);


// ? object will come when you set date an id in array and
//   add date picker and push it in array object
// const ListTodo = [{
//     title: 'Get groceries',
//     dueDate: '2022',
//     id: 'id1'
// }, {
//     title: 'Get car',
//     dueDate: '2023',
//     id: 'id1'
// },{
//     title: 'buy dinner',
//     dueDate: '2022',
//     id: 'id1'
// }];

// ListTodo.push('new element');

// render();
// function addTodo() {
//     let textBox = document.getElementById('todo-title');
//     let title = textBox.value;

//     const datePicker = document.getElementById('date-picker');
//     const dueDate = datePicker.value;

//     ListTodo.push({
//         title: title,
//         dueDate: dueDate,
//     });

//     render();
// }
// function render() {
//     document.getElementById('todo-list').innerHTML = '';
//     ListTodo.forEach(function (todo) {
//         element = document.createElement('div');
//         element.innerText = `${todo.title}   ${todo.dueDate}`;
//         document.body.appendChild(element);
//     });
// }
// console.log(ListTodo);

//? make id random
// const ListTodo = [{
//     title: 'Get groceries',
//     dueDate: '2022',
//     id: 'id1'
// }, {
//     title: 'Get car',
//     dueDate: '2023',
//     id: 'id1'
// }, {
//     title: 'buy dinner',
//     dueDate: '2022',
//     id: 'id1'
// }];
// render();
// function addTodo() {
//     let textBox = document.getElementById('todo-title');
//     let title = textBox.value;

//     const datePicker = document.getElementById('date-picker');
//     const dueDate = datePicker.value;
    
//     const id = new Date().getTime();

//     ListTodo.push({
//         title: title,
//         dueDate: dueDate,
//         id: id
//     });

//     render();
// }
// function render() {
//     document.getElementById('todo-list').innerHTML = '';
//     ListTodo.forEach(function (todo) {
//         element = document.createElement('div');
//         element.innerText = `${todo.title}   ${todo.dueDate}`;
//         document.body.appendChild(element);
//     });
// }
// console.log(ListTodo);


//? make delete button
// const ListTodo = [{
//     title: 'Get groceries',
//     dueDate: '2022',
//     id: 'id1'
// }, {
//     title: 'Get car',
//     dueDate: '2023',
//     id: 'id1'
// }, {
//     title: 'buy dinner',
//     dueDate: '2022',
//     id: 'id1'
// }];
// render();
// function addTodo() {
//     let textBox = document.getElementById('todo-title');
//     let title = textBox.value;

//     const datePicker = document.getElementById('date-picker');
//     const dueDate = datePicker.value;

//     const id = new Date().getTime();

//     ListTodo.push({
//         title: title,
//         dueDate: dueDate,
//         id: id
//     });

//     render();
// }

// function deleteTodo(event) {
//     const deleteButton = event.target;
//     const idToDelete = deleteButton.id;

// }


// function render() {
//     document.getElementById('todo-list').innerHTML = '';
//     ListTodo.forEach(function (todo) {
//         element = document.createElement('div');
//         element.innerText = `${todo.title}   ${todo.dueDate}`;

//         const deleteButton = document.createElement('button');
//         deleteButton.innerText = 'delete';
//         deleteButton.style = 'margin-left : 12px';
//         deleteButton.onclick = deleteTodo;
//         deleteButton.id = ListTodo.id;
//         element.appendChild(deleteButton);
        
//         const ttodoList = document.getElementById('todo-list');
//         ttodoList.appendChild(element);
//     });
// }
// console.log(ListTodo);


// ? make delete button function / filter and func()

// const ListTodo = [{
//     title: 'Get groceries',
//     dueDate: '2022',
//     id: 'id1'
// }, {
//     title: 'Get car',
//     dueDate: '2023',
//     id: 'id1'
// }, {
//     title: 'buy dinner',
//     dueDate: '2022',
//     id: 'id1'
// }];
// render();
// function addTodo() {
//     let textBox = document.getElementById('todo-title');
//     let title = textBox.value;

//     const datePicker = document.getElementById('date-picker');
//     const dueDate = datePicker.value;

//     const id = new Date().getTime();

//     ListTodo.push({
//         title: title,
//         dueDate: dueDate,
//         id: id
//     });

//     render();
// }
// function func() {
//     return 'one hundred';
// }

// function deleteTodo(event) {
//     const deleteButton = event.target;
//     const idToDelete = deleteButton.id;

//     ListTodo.filter(function (todo) {
//         return true;
//     })

// }


// function render() {
//     document.getElementById('todo-list').innerHTML = '';
//     ListTodo.forEach(function (todo) {
//         element = document.createElement('div');
//         element.innerText = `${todo.title}   ${todo.dueDate}`;

//         const deleteButton = document.createElement('button');
//         deleteButton.innerText = 'delete';
//         deleteButton.style = 'margin-left : 12px';
//         deleteButton.onclick = deleteTodo;
//         deleteButton.id = ListTodo.id;
//         element.appendChild(deleteButton);

//         const ttodoList = document.getElementById('todo-list');
//         ttodoList.appendChild(element);
//     });
// }
// console.log(ListTodo);



// ? make delete button function and mvc
// model 
const ListTodo = [{
    title: 'Get groceries',
    dueDate: '2022',
    id: 'id1'
}, {
    title: 'Get car',
    dueDate: '2023',
    id: 'id1'
}, {
    title: 'buy dinner',
    dueDate: '2022',
    id: 'id1'
}];
render();

// creates a todo 
function createTodo(title, dueDate) {
    const id = '' + new Date().getTime();

    ListTodo.push({
        title: title,
        dueDate: dueDate,
        id: id
    });
}

//delete a todo

function removeTodo(idToDelete) {
    ListTodo.filter(function (todo) {
        // If the id of this todo matches idToDelete, return false
        // For everything else, return true
        if (todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    })
}

// controller
function addTodo() {
    let textBox = document.getElementById('todo-title');
    let title = textBox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createTodo(title, dueDate);

    render();
}
function func() {
    const num1 = 1;
    const num2 = 5;

    if (num1 > num5) {
        console.log('run this code');
    } else if (num1 > 100) {
        console.log('not run');
    } else if (num1 > 0) {
        console.log('true');
    } else {
        console.log('other')
    }
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    
    removeTodo(idToDelete);
    render();

}

// view 
function render() {
    // reset our list 
    document.getElementById('todo-list').innerHTML = '';
    
    ListTodo.forEach(function (todo) {
        element = document.createElement('div');
        element.innerText = `${todo.title}   ${todo.dueDate}`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.style = 'margin-left : 12px';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = ListTodo.id;
        element.appendChild(deleteButton);

        const ttodoList = document.getElementById('todo-list');
        ttodoList.appendChild(element);
    });
}
render();
























