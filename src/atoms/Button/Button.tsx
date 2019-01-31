import * as React from 'react';
import MUIButton, {ButtonProps as MUIButtonProps} from '@material-ui/core/Button';

export interface ButtonProps extends MUIButtonProps {
}

export default class Button extends React.PureComponent<ButtonProps> {
  public render() {
    return (
      <MUIButton {...this.props} />
    );
  }
}
