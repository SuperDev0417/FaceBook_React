import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import ItemDelete from './ItemDelete'
import PropTypes from 'prop-types';

export class ListScreen extends Component {

    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }

    getListKey() {
        if (this.props.todoList) {
            let owner = this.props.todoList.key;
            return this.props.todoList.key;
        }
    }

    render() {

        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash visibilityTrue={this.props.visibilityTrue} />
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            value={this.getListName()} 
                            type="text" 
                            id="list_name_textfield" />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            value={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield" />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} goItemScreen = {this.props.goItemScreen} goListScreen = {this.props.goListScreen} moveUp = {this.props.moveUp} moveDown={this.props.moveDown} deleteItem = {this.props.deleteItem}/>
                <ItemDelete visibility = {this.props.visibility} visibilityFalse = {this.props.visibilityFalse} deleteList = {this.props.deleteList.bind( this, this.getListKey() )} />
            </div>         
        )
    }
}

export default ListScreen
