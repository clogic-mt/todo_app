import React from 'react';
import { Button, TextField} from '../../atoms';
import styled from 'styled-components';

export interface InputRowProps {
    onSubmit: any,
}

class InputRow extends React.PureComponent<InputRowProps>{
    state = {
        inputValue: '',
    }

    handleChange(event:any) {
        this.setState({
            inputValue: event.target.value
        })
    }

    onSubmit() {
        this.setState({
            inputValue: '',
        })
        this.props.onSubmit(this.state.inputValue)
    }

    render(){
        return(
            <div>
                <TextField 
                    value={this.state.inputValue}
                    onChange= {(event) => this.handleChange(event)}
                />
                <Button 
                    disableRipple
                    variant="contained"
                    color="primary"
                    onClick={()=>this.onSubmit()}
                    > 
                        add
                </Button>
            </div>
        )
    }
}

export default InputRow