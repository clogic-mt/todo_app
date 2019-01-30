import React from 'react';
import {CLButton, CLCheckbox, CLLabel} from '../../atoms';

class ListItem extends React.PureComponent{
    render(){
        return(
            <div>
                <CLLabel>test</CLLabel>
                <CLCheckbox></CLCheckbox>
                <CLButton>Delete</CLButton>
            </div>
        )
    }
}

export default ListItem