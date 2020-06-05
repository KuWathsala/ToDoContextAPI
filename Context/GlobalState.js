import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component{

    state = {
        tasks: []
    }
    
    addNewTask = (task) => {
        const list = [...this.state.tasks, task];
        this.setState({tasks: list});
    };
    
    deleteTask = (taskId) => {
        this.setState(this.state.tasks.splice(taskId,1));
    };

    render(){
        return (
            <Context.Provider 
                value={{
                    tasks: this.state.tasks,
                    addNewTask: this.addNewTask,
                    deleteTask: this.deleteTask
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}