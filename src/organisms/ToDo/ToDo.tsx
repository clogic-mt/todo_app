import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
                        <Typography variant='title'>To Do app</Typography>
                        <InputRow onSubmit={this.addItem} />
                        <ListItemsContainer toDoList={this.state.toDolist}/>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default ToDo