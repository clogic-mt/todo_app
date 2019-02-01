import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {ListItemsContainer, InputRow} from '../../molecules';

export interface ItemInterface {
    item: any,
    isChecked: boolean,
}

class ToDo extends React.Component{
    state:any={
        toDolist: []
    }

    addItem = (inputValue:string) => {
        let newItem: ItemInterface = {item: inputValue, isChecked: false}
        this.setState({
            toDolist: [...this.state.toDolist, newItem ]
        })
    }

    deleteItem = (index:number ) => {
        let currentToDoList = [...this.state.toDolist]
        currentToDoList.splice(index, 1),
        this.setState({
            toDolist: currentToDoList
        })
    }

    updateItem = (index:number) => {
        let currentToDoList = [...this.state.toDolist]
        const itemIsChecked = currentToDoList[index].isChecked
        if (!itemIsChecked) {
            currentToDoList[index].isChecked = true 
        } else {
            currentToDoList[index].isChecked = false
        }
        this.setState({
            toDoList: currentToDoList
        })
    }

    render(){
        return (
            <Grid justify="center" container>
                <Grid item xs={5}>
                    <Paper style={{padding: '1em'}}>
                        <Typography variant='title'>To Do app</Typography>
                        <InputRow onSubmit={this.addItem} />
                        <ListItemsContainer onChange={this.updateItem} delete={this.deleteItem} toDoList={this.state.toDolist}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default ToDo