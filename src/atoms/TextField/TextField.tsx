import React from 'react';
import MUTextField, {TextFieldProps} from '@material-ui/core/TextField';

class TextField extends React.PureComponent<TextFieldProps> {
    render(){
        return(
            <MUTextField {...this.props}/>
        )
    }
}

export default TextField