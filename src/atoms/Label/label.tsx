import React from 'react';
import Typography from '@material-ui/core/Typography';

class CLLabel extends React.PureComponent {
    render(){
        return(
            <Typography variant="overline" gutterBottom>{this.props.children}</Typography>
        )
    }
}

export default CLLabel