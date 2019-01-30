import React from 'react';
import {ListItemsContainer, InputRow} from '../../molecules';

class ToDo extends React.Component{
    render(){
        return (
            <div>
                <h2>This it the ToDo app</h2>
                <InputRow/>
                <ListItemsContainer/>
            </div>
        )
    }
}

export default ToDo