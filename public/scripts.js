// is the highest level component and primary state holder.
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////// king COMPONENT //////////////////////////////////////////////////////////////
var KingComponent = React.createClass({
	getInitialState: function() {
		return{
			bodyDisplay: ''
		};
	},
	displayAbout: function() {
		this.setState({bodyDisplay: ''})
	},
	displayProject: function() {
		//console.log('switch to projects');
		this.setState({bodyDisplay: 'projects'})
	},
	displayResume: function() {
		this.setState({bodyDisplay: 'resume'})
	},
	displayContact: function() {
		this.setState({bodyDisplay: 'contact'})
	},
	render: function() {
		return (
			<div>
				<NavComponent 
					default={this.displayAbout}
					toPro={this.displayProject}
					toResume={this.displayResume}
					toContact={this.displayContact}
				/>
				<BodyComponents display={this.state.bodyDisplay} />	
			</div>
		)
	}
});
////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// NAV COMPONENT //////////////////////////////////////////////////////////////
var NavComponent = React.createClass({
	handleAboutClick: function(e) {
		this.props.default();
	},
	handleProClick: function(e) {
		//console.log('onclick');
		this.props.toPro();
	},
	handleResumeClick: function(e) {
		this.props.toResume();
	},
	handleContactClick: function(e) {
		this.props.toContact();
	},
	render: function() {
		return(
			<div id='nav'>
				<h1 className='navHeader'>Gregory D. Georgoulis</h1>
				<h3 className='navHeader'>Web Developer</h3>
				<div className='navHeader'>
					<ul id='navList'>
						<li className='navBar' onClick={this.handleAboutClick}>About Me</li>
						<li className='navBar' onClick={this.handleProClick}>Projects</li>
						<li className='navBar' onClick={this.handleResumeClick}>My Resume</li>
						<li className='navBar' onClick={this.handleContactClick}>Contact Me</li>
					</ul>
				</div>
			</div>
		)
	}
});
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////// BODY COMPONENT /////////////////////////////////////////////////////////////
var BodyComponents =React.createClass({
	render: function() {
		if (this.props.display === '') {
			return(
				<div>
					<div id='body'>
						<h3>BackGround</h3>
						<img className='me' src='./images/me.png' />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Honesta oratio, Socratica, Platonis etiam. Summum ením bonum 
							exposuit vacuitatem doloris; Nondum autem explanatum satis, 
							erat, quid maxime natura vellet. Polycratem Samium felicem appellabant. 
							Quodsi ipsam honestatem undique pertectam atque absolutam.	 
						</p>
						<h3>About Me</h3>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Honesta oratio, Socratica, Platonis etiam. Summum ením bonum 
							exposuit vacuitatem doloris; Nondum autem explanatum satis, 
							erat, quid maxime natura vellet. Polycratem Samium felicem appellabant. 
							Quodsi ipsam honestatem undique pertectam atque absolutam.	 
						</p>
					</div>
					<ContactComponent />
				</div>
			);
		} else if (this.props.display === 'projects') {
			return(
				<div>
					<div id='body'>
						<div className='projects'>
							<h3>Black Jack game</h3>
							<img src="./images/bj.png" />
							<h4> 
								<a className="link" href="http://gregorygeorgoulis.github.io/blackJack/">Link To Game</a> 
								<a className="link" href="https://github.com/gregoryGeorgoulis/blackJack">GitHub</a> 
							</h4>
						</div>
						<div className='projects'>
							<h3>Comic Book app 2.0</h3>
							<img src="./images/rca.jpg" />
  						<h4> 
  							<a className="link" href="https://ruby-comic.herokuapp.com">Link To App</a> 
  							<a className="link" href="https://github.com/gregoryGeorgoulis/rubycomic">GitHub</a>
  						</h4>
						</div>
						<div className='projects'>
							<h3>Movie App</h3>
							<img src="./images/ma.png" />
  						<h4> 
  							<a className="link" href="https://three-forks.herokuapp.com/"> Link To App</a> 
  							<a className="link" href="https://github.com/gregoryGeorgoulis/project3/tree/master/project">GitHub</a>
  						</h4>
						</div>
						<div className='projects'>
							<h3>Know Your Nation</h3>
							<img src="./images/kun.png" />
    					<h4> 
    						<a className="link" href="https://know-your-nation.herokuapp.com/">Link To App</a> 
    						<a className="link" href="https://github.com/gregoryGeorgoulis/final">GitHub</a>
    					</h4>
						</div>
					</div>
					<ContactComponent />
				</div>
			);
		} else if (this.props.display === 'contact') {
			return(
				<div>
					<div id='body'>
						<h1>Contact</h1>
					</div>
					<ContactComponent />
				</div>
			);
		} else if (this.props.display === 'resume') {
			return(
				<div id='resume'>
						<iframe 
							src="./images/resume.pdf" 
							style={{'width' : '100%' , 'height' : '700px'}} >
						</iframe>
				</div>
			);
		}
	}
});
////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// CONTACT COMPONENT /////////////////////////////////////////////////////////////
var ContactComponent = React.createClass({
	render: function() {
		return(
			<div id='contact'>
				<button className='button'>Linkedin</button>
				<button className='button'>Facebook</button>
				<button className='button'>GitHub</button>
			</div>
		)
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////
///////////////// React.DOM ////////////////////////////////////////////////////////////////
ReactDOM.render(
	<KingComponent />,
document.getElementById('main'));