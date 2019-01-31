import React from 'react';
import ListItem from '../ListItem/ListItem'

class ListItemsContainer extends React.PureComponent {
    render(){
        return(
            <div>
                <ListItem itemName={'eat cheese'} isChecked={false}></ListItem>
            </div>
        )
    }
}

export default ListItemsContainer