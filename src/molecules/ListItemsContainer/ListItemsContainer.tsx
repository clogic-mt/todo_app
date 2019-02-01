import React from 'react';
import ListItem from '../ListItem/ListItem'

export interface ListItemsContainerInterface {
    toDoList: any[],
    delete: any,
    onChange:any,
}

class ListItemsContainer extends React.Component<ListItemsContainerInterface> {
    render(){
        return(
            this.props.toDoList.map((item, index)=>(
                <ListItem 
                    onDelete={()=>this.props.delete(index)}
                    key={index} 
                    itemName={item.item}
                    onChange={() => this.props.onChange(index)}
                    isChecked={item.isChecked}
                >
                </ListItem>
            ))
        )
    }
}

export default ListItemsContainer