import React,{useState,useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
//import {robots} from './robots';
import './App.css';

//test
function App(){

	// constructor(){
	// 	super()
	// 	this.state={
	// 		robots:[],
	// 		searchfield:''
	// 	}
		
	// }
	const [robots,setRobots]=useState([]);
	const [searchfield,setSearchfield]=useState('');

			// componentDidMount(){
		// 	fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => response.json())
		// 	.then(users => this.setState({robots:users}));

		// }

		useEffect(()=>{
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users));
			},[]);

	const onSearchChange=(event)=>{
		setSearchfield(event.target.value);
		}


	
//this.setState({robots:users})


		const filteredRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());

		}
			)

			//console.log(robots,searchfield);

		if(robots.length===0)
		{
			return <h1>Loading</h1>
		}
		else
		{
				return (
					<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
					
					</div>
						);
		}

		//console.log(filteredRobots);



}


export default App;