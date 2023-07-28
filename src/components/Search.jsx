import React from "react";

class Search extends React.Component{
    state = {
        search: '',
    }

    searchUpdate = (e) => {
        if (e.code === 'Enter') {
        this.props.su(this.state.search);
      }
    }

    render(){
         return <div className="row" onKeyDown={this.searchUpdate}>
         <div className="input-field col s6">
           <input 
           value={this.state.search}
           onChange={(e) => this.setState({search: e.target.value})} 
           id="search" 
           type="text" 
           className="validate" 
           placeholder="Search"/>
         </div>
       </div>
    }
}

export {Search} 