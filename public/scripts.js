var KingComponent = React.createClass({
	render: function() {
		return (
			<div>
				<NavComponent />
				<ContactComponent />
				<BodyComponents />
			</div>
		)
	}
});

var NavComponent = React.createClass({
	render: function() {
		return(
			<div>
				<h1>HEADING</h1>
			</div>
		)
	}
});

var ContactComponent = React.createClass({
	render: function() {
		return(
			<div>
				<button>contact</button>
			</div>
		)
	}
});

var BodyComponents =React.createClass({
	render: function() {
		return(
			<div>
			<p>Dis is da body</p>
			</div>
		)
	}
});

ReactDOM.render(
	<KingComponent />,
document.getElementById('main')
);