import React from 'react';
import {ListItemsContainer, InputField} from '../../molecules';

class ToDo extends React.Component{
    render(){
        return (
            <div>
                <h2>This it the ToDo app</h2>
                <InputField/>
                <ListItemsContainer/>
            </div>
        )
    }
}

export default ToDo