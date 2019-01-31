import React from 'react';
import {Button, CLCheckbox, CLLabel} from '../../atoms';
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
                <Button>Delete</Button>
            </div>

        )
    }
}

export default ListItem