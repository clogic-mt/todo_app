import React from 'react';
import {Button, CLCheckbox, CLLabel} from '../../atoms';
import Styled from 'styled-components';

import { Color } from 'csstype';
import color from '@material-ui/core/colors/amber';

export interface Props {
    itemName: string,
    isChecked: boolean
}

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


class ListItem extends React.PureComponent<Props>{

    render(){
        return(
            <StyledDiv>
                <CLLabel color={this.props.isChecked ? "error" : "primary"  }>{this.props.itemName}</CLLabel>
                <div> 
                    <CLCheckbox checked={this.props.isChecked}/>
                    <Button>Delete</Button>
                </div>
            </StyledDiv>

        )
    }
}

export default ListItem