import React from 'react';
import {CLButton, CLCheckbox} from '../../atoms';

class ListItem extends React.PureComponent{
    render(){
        return(
            <div>
                <CLCheckbox></CLCheckbox>
                <CLButton>Delete</CLButton>
            </div>
        )
    }
}

export default ListItem