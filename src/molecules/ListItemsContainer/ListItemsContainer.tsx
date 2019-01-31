import React from 'react';
import ListItem from '../ListItem/ListItem'

export interface ListItemsContainerInterface {
    toDoList: any[]
}

class ListItemsContainer extends React.PureComponent<ListItemsContainerInterface> {
    render(){
        return(
            this.props.toDoList.map((item, index)=>(
                <ListItem key={index} itemName={item} isChecked={false}></ListItem>
            ))
        )
    }
}

export default ListItemsContainer