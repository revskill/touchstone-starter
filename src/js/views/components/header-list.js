/** @jsx React.DOM */

var React = require('react'),
	SetClass = require('classnames'),
	Tappable = require('../../touchstone/tappable'),
	Navigation = require('../../touchstone/navigation'),
	Link = require('../../touchstone/link'),
	UI = require('../../touchstone/ui');

var Months = require('../../../data/months');

var HeaderListItem = React.createClass({
	mixins: [Navigation],

	showDetailsView: function() {
		this.showView('details', 'show-from-right', { month: this.props.month })
	},

	render: function() {

		return (
			<div className="list-item">
				{this.props.month.name}
			</div>
		);
	}
});

var HeaderList = React.createClass({
	render: function() {

		var months = [];
		var	lastSeason = '';
		
		this.props.months.forEach(function(month, i) {

			var season = month.season;

			if (lastSeason !== season) {
				lastSeason = season;

				months.push(
					<div className="list-header" key={"list-header-" + i}>{season}</div>
				);
			}

			month.key = 'month-' + i;
			months.push(React.createElement(HeaderListItem, { month: month }));
		});
		
		return (
			<div className="panel panel--first ios-list">
				{months}
			</div>
		);
	}
});

module.exports = React.createClass({
	mixins: [Navigation],

	render: function() {

		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				<UI.FlexBlock height="44px" className="headerbar">
					<Link to="home" viewTransition="reveal-from-right" className="headerbar-button">
						<div className="headerbar-button-icon ion-chevron-left" />
						<div className="headerbar-button-label">Components</div>
					</Link>
					<div className="headerbar-label">Header List</div>
				</UI.FlexBlock>
				<UI.FlexBlock scrollable>
					<HeaderList months={Months} />
				</UI.FlexBlock>
			</UI.FlexLayout>
		);
	}
});