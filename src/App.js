import React from 'react'
import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';


const App = () => {

if(!localStorage.getItem('username')) return <LoginForm/>


    return (
		<ChatEngine
			height="100vh"
			projectID="15d90526-89fd-4a7c-b520-e5df723f91d4"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		></ChatEngine>
	);
}

export default App
