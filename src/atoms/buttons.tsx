import React, { Children } from 'react';
import Button from '@material-ui/core/Button';

class CLButton extends React.PureComponent {
    render(){
        return(
            <Button>{this.props.children}</Button>
        )
    }
}

export default CLButton