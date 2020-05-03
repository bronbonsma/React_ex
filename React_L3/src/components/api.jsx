import React from 'react';
import axios from 'axios'
import UserForm from './userForm';


class Api extends React.Component{
  constructor(props){
  super(props);
  this.state = { 
    productIds: [],
    loading: true,
    formName:" ",
    formAvatar: " ",
  }
}
componentDidMount(){
    this.loadUsers();
} 


async loadUsers(){
    const response = await axios.get('https://5dd14f8d15bbc2001448d07d.mockapi.io/products'
    );
    this.setState({productIds:response.data,
    loading:false,
});
}

 async handleOnSumbmit(event){
    event.preventDefault();
    const{ formName, formAvatar} = this.state;
    axios.post('https://5dd14f8d15bbc2001448d07d.mockapi.io/products',
    {
        name:formName, 
        avatar:formAvatar
    });

    this.loadUsers();

}

render(){
  const{ formName, formAvatar, productIds, loading} = this.state;
  return(
    <>
    <form onSubmit = {(event)=> {this.handleOnSumbmit(event)}}>
      <input type ="text"
        name= "name"
        value={formName}
        id ="name"
        placeholder ="name"
        onChange ={(event) => this.setState({formName: event.target.value})}
        />
        <input type = "text"
        name = "avatar"
        value = {formAvatar}
        id = "avatar"
        placeholder ="avatar"
        onChange ={(event) => this.setState({formAvatar: event.target.value})}
        />
        <button type = "submit">New user</button>
    </form>
      {loading && <span>Loading...</span>}
      {productIds.map((productId) => (
        <UserForm key={productId.id} name ={productId.name} avatar ={productId.avatar}/>
      ))}
    </>
  );
}
}

export default Api;