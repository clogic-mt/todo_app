import React from 'react';
import ListItem from '../ListItem/ListItem'

export interface ListItemsContainerInterface {
    toDoList: any[]
}

class ListItemsContainer extends React.PureComponent<ListItemsContainerInterface> {
    render(){
        return(
            this.props.toDoList.map((item)=>(
                <ListItem itemName={item} isChecked={false}></ListItem>
            ))
        )
    }
}

export default ListItemsContainer