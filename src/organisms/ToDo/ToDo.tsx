import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {ListItemsContainer, InputRow} from '../../molecules';

class ToDo extends React.Component{
    state={
        toDolist: []
    }

    addItem = (inputValue:string) => {
        this.setState({
            toDolist: [...this.state.toDolist, inputValue ]
        })
    }

    render(){
        return (
            <Grid justify="center" container>
                <Grid item xs={5}>
                    <Paper style={{padding: '1em'}}>
                        <h1>To Do app</h1>
                        <InputRow onSubmit={this.addItem} />
                        <ListItemsContainer toDoList={this.state.toDolist}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default ToDo