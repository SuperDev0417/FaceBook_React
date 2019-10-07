import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    render() {
        return (
            <div id="list_items_container" className = "list_item_header_card">
                <div id="todo_item" > 
                <div className="list_item_header_card"> </div>
                <div className="list_item_task_header">Task</div>
                <div className="list_item_due_date_header">Due Date</div>
                <div className="list_item_status_header">Status</div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem} />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default ListItemsTable
