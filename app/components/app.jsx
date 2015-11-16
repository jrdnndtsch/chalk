import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, Navigation } from 'react-router';

let createBrowserHistory = require('history/lib/createBrowserHistory');

import Login from './login/index.jsx';
import Dashboard from './dashboard/index.jsx';
import Classroom from './classroom/index.jsx';
import Lesson from './lesson/index.jsx';
import Exercises from './exercises/index.jsx';
import Topics from './topics/index.jsx';
import Footer from './footer/index.jsx';
import Media from './media/index.jsx';
import Instructors from './instructors/index.jsx';

let App = React.createClass({
	render() {
		return (
			<div>
				<header className="mainHeader">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="dashboard">Dashboard Link</Link>
						</li>
						<li>
							<Link to="classroom">Classroom Link</Link>
						</li>
						<li>
							<Link to="exercises">Exercises Link</Link>
						</li>
						<li>
							<Link to="lesson">Lesson Link</Link>
						</li>
						<li>
							<Link to="topic">Topic Link</Link>
						</li>
					</ul>
				</header>

				<section>
					{this.props.children || <Login />}
				</section>
				<Footer />
			</div>
		);
	}
});


ReactDom.render(
	(<Router history={createBrowserHistory()}>
			<Route path='/' component={App}>
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/classroom' component={Classroom} />
			<Route path='/lesson' component={Lesson} />
			<Route path='/topics' component={Topics} />
			<Route path='/exercises' component={Exercises} />
		</Route>
	</Router>)
	, document.getElementById('app'));