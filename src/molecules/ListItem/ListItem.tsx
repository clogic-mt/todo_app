import React from 'react';
import {Button, CLCheckbox, CLLabel} from '../../atoms';
import Styled from 'styled-components';

import { Color } from 'csstype';
import color from '@material-ui/core/colors/amber';

export interface Props {
    itemName: string,
    onChange: () => void,
    onDelete: () => void,
    isChecked: boolean,
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
                <CLLabel 
                    linethrough = {this.props.isChecked}
                    color={this.props.isChecked ? "error" : "primary"  }
                >{this.props.itemName}</CLLabel>
                <div> 
                    <CLCheckbox 
                        onChange={this.props.onChange}
                        checked={this.props.isChecked}
                    />
                    <Button onClick={() => this.props.onDelete()}>Delete</Button>
                </div>
            </StyledDiv>

        )
    }
}

export default ListItem