import React from 'react';
import {CLButton, CLCheckbox, CLLabel} from '../../atoms';
import { Color } from 'csstype';
import color from '@material-ui/core/colors/amber';

export interface Props {
    itemName: string,
    isChecked: boolean
}

class ListItem extends React.PureComponent<Props>{

    render(){
        return(
            <div>
                <CLLabel color={this.props.isChecked ? "error" : "primary"  }>{this.props.itemName}</CLLabel>
                <CLCheckbox checked={this.props.isChecked}/>
                <CLButton>Delete</CLButton>
            </div>

        )
    }
}

export default ListItem