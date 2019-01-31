import React from 'react';
import Checkbox, {CheckboxProps} from '@material-ui/core/Checkbox';


class CLCheckbox extends React.PureComponent<CheckboxProps> {
    render(){
        return(
            <Checkbox {...this.props}/>
        )
    }
}

export default CLCheckbox