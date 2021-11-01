import React, { Component } from 'react';

class App extends Component {
    state = {
        newTask: '',
        todos: [
            { text: 'test', done: false },
            { text: 'test1', done: false },
            { text: 'test2', done: false },
        ]
    }

    completeTask = (index) => {
        const todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({todos});
    };

    updateNewTask = (event) => {
        this.setState({
            newTask: event.target.value
        })
    };

    addTask = () => {
        const todos = [...this.state.todos];
        todos.push({
            text: this.state.newTask,
        });
        this.setState({
            todos,
            newTask: ''
        })
    };

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="sider">
                        <div className="dots">
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                            <div className="dot3"></div>
                        </div>
                        <div className="my-name">
                            <h2>Hello, In Todo App By React</h2>
                        </div>
                        <div className="incomplete-task-up">
                            <div className="incomplete-task">

                                <p>You have {  this.state.todos.length } <span className='styllle'>Incompleted</span> Tasks :(</p>

                            </div>
                        </div>

                        <div className="uppertaskarea">
                            <ul className="taskarea">
                                {this.state.todos.map((todo, index) => <li className="tasks" key={index}>
                                    <p>{todo.text}</p> <div className="task-update-delete"> <button onClick={() => { this.completeTask(index) }}>
                                                    <div className="delete">
                                                        <a href="#">
                                                            <i className="fas fa-times-circle"></i>
                                                        </a>
                                                    </div>
                                                </button>
                                                </div>
                                </li>
                                )}
                            </ul>
                        </div>
                        
                        <div className="new-task-button">
                            <input className="inputAddTask" value={this.state.newTask} onChange={ this.updateNewTask } />
                            <button className="btnAddTask" onClick={this.addTask}>Add Task</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
