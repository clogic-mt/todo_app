import React from 'react';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

class CLLabel extends React.PureComponent<TypographyProps> {
    render(){
        return(
            <Typography variant="overline" gutterBottom {...this.props}/>
        )
    }
}

export default CLLabel