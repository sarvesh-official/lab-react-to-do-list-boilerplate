import React from 'react'
import "../App.css"
import "../index.css"
export default class Todoitem extends React.Component {
    render() {
        let { e, i, updateItem, deleteItem } = this.props
    return (
        <div key={{ i }} className='todoentries'>
            <input type="text" value={e} onChange={(event) => {
                updateItem(event.target.value, event.target.index)
            }} />
            <button style={{background:"#d13333"}} onClick={() => {
                deleteItem(i) 
            }}>D E L E T E</button>
            
        </div>
    )
  }
}
