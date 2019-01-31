import * as React from 'react';
import MUIcon, {IconProps as MUIconprops} from "@material-ui/core/Icon";

export interface IconProps extends MUIconprops {
    wadwad: boolean,
}

export default class Icon extends React.PureComponent<IconProps, any> {
  public render() {
    return (
        <MUIcon {...this.props}/>
    );
  }
}
