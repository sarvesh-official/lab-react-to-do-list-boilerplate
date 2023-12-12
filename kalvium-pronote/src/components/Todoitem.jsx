import React from 'react'

export default class Todoitem extends React.Component {
    render() {
        let { e, i, updateItem, deleteItem } = this.props
    return (
        <div key={{ i }}>
            <input type="text" value={e} onChange={(event) => {
                updateItem(event.target.value, event.target.index)
            }} />
            <button onClick={() => {
                deleteItem(i)
            }}>D E L E T E</button>
            
        </div>
    )
  }
}
