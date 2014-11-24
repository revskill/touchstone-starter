/** @jsx React.DOM */

var React = require('react'),
	SetClass = require('classnames'),
	Tappable = require('../touchstone/tappable'),
	Navigation = require('../touchstone/navigation'),
	Link = require('../touchstone/link'),
	UI = require('../touchstone/ui');

module.exports = React.createClass({
	mixins: [Navigation],

	getInitialState: function() {
		return {
			flavour: this.props.user.flavour
		}
	},

	handleFlavourChange: function(newFlavour) {

		this.setState({
			flavour: newFlavour
		});

	},

	render: function() {

		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				<UI.FlexBlock height="44px" className="headerbar">
					<Link to="details" viewTransition="reveal-from-right" params={{ user: this.props.user, flavour: this.state.flavour }} className="headerbar-button">
						<div className="headerbar-button-icon ion-chevron-left" />
						<div className="headerbar-button-label">Details</div>
					</Link>
					<div className="headerbar-label">Favourite Flavour</div>
				</UI.FlexBlock>
				<UI.FlexBlock scrollable>
					<div className="panel is-first">
						<UI.RadioList value={this.state.flavour} onChange={this.handleFlavourChange} options={[
							{ label: 'Vanilla',    value: 'vanilla' },
							{ label: 'Chocolate',  value: 'chocolate' },
							{ label: 'Caramel',    value: 'caramel' },
							{ label: 'Strawberry', value: 'strawberry' },
							{ label: 'Banana',     value: 'banana' },
							{ label: 'Lemon',      value: 'lemon' },
							{ label: 'Pastaccio',  value: 'pastaccio' }
						]} />
					</div>
				</UI.FlexBlock>
			</UI.FlexLayout>
		);
	}
});