import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import PostQuestion from './components/post-question/PostQuestion';
//import UserProfile from './components/user-profile/UserProfile';
import UserActivityTab from './components/user-activity-tab/UserActivityTab';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserActivityTab />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
