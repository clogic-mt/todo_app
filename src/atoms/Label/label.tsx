import React from 'react';
import Typography, { TypographyProps as MUTypographyProps } from '@material-ui/core/Typography';

import styled from 'styled-components';

export interface TypographyProps extends MUTypographyProps {
    linethrough: boolean,
}

const StyledTypography = styled<any>(Typography)`
    text-decoration: ${props => props.linethrough ? 'line-through' : 'none'} ;
`;

class CLLabel extends React.PureComponent<TypographyProps> {
    render(){
        return(
            <StyledTypography variant="overline" gutterBottom {...this.props}/>
        )
    }
}

export default CLLabel