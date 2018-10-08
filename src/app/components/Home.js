import React from "react";
import PropTypes from "prop-types";



export class Home extends React.Component {

   constructor(props){
      super();
         this.state = {
            age: props.initalAge,
            status: 0,
            homeLink: props.initialLinkName
         };
         setTimeout(() => {
            this.setState({
               status: 1
            });
         },3000)
         console.log("constructor");
      
   }

   componentWillMount(){
      console.log(" Component will mount");
   }
    componentDidMount(){
      console.log(" Component did mount");
   }
      componentWillReceiveProps(nextProps){
      console.log(" Component will receive props", nextProps);
   }

   shouldComponentUpdate(nextProps, nextState){
      console.log( "Should component update", nextProps, nextState);
      if (nextState.status === 1){
         return false;
      }
      return true;
   }
   componentWillUpdate(){
      console.log("Component will update", nextProps, nextState);
   }
   componentDidUpdate(){
      console.log("Component did update", preProps, preState);
   }
   componentWillUnmount(){
      console.log(" Component will unmount");
   }
   
   


   onMakeOlder(){
      this.setState({
         age: this.state.age + 3
      });

   }

   onChanged(){
      this.props.changeLink(this.state.homeLink);
   } 
   onHandlerChange(event){
      this.setState({
         homeLink: event.target.value
      });

   }

	render() {

		return (

               <div>

               	<h1>This demo contents here</h1>
                  <p>Your name is {this.props.name },Your age is { this.state.age }</p>
                  <p>Status:{this.state.status}</p>
                  <hr/>
                  <button onClick = {this.onMakeOlder.bind(this)} className = "btn btn-primary">Make me Older!</button>
                  <hr/>
                  <button onClick = {this.props.greet} className = "btn btn-primary">Greet</button>
                  <hr/>
                  <input type = "text" value = {this.state.homeLink} onChange = {(event) => this.onHandlerChange(event)}/>
                  <button onClick = {this.onChanged.bind(this)} className = "btn btn-primary">Changed Home</button>

               </div>
			);
	}
}

Home.PropTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
   greet: React.PropTypes.func,
   initialLinkName: React.PropTypes.string
};
