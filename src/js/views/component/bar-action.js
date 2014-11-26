/** @jsx React.DOM */

var React = require('react'),
	SetClass = require('classnames'),
	Tappable = require('../../touchstone/tappable'),
	Navigation = require('../../touchstone/navigation'),
	Link = require('../../touchstone/link'),
	UI = require('../../touchstone/ui');

module.exports = React.createClass({
	mixins: [Navigation],

	flashAlert: function(alertContent) {
		alert(alertContent);
	},

	render: function() {

		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				<UI.FlexBlock height="44px" className="Headerbar">
					<Link to="home" viewTransition="reveal-from-right" className="Headerbar-button">
						<div className="Headerbar-button-icon ion-chevron-left" />
						<div className="Headerbar-button-label">Back</div>
					</Link>
					<div className="Headerbar-label">Action Bar</div>
				</UI.FlexBlock>
				<UI.FlexBlock scrollable>
					<div className="view-header text-caps">Label Only</div>
					<div className="panel">
						<UI.ActionButtons>
							<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')}  label="Primary Action" />
							<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')} label="Secondary Action" />
						</UI.ActionButtons>
					</div>
					<div className="view-header text-caps">Icon Only</div>
					<div className="panel">
						<UI.ActionButtons>
							<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')}  icon="ion-arrow-up-c" />
							<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')} icon="ion-arrow-down-c" />
						</UI.ActionButtons>
					</div>
					<div className="view-header text-caps">Icon & Label</div>
					<div className="panel">
						<UI.ActionButtons>
							<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')}  label="Primary Action"    icon="ion-arrow-up-c" />
							<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')} label="Secondary Action" icon="ion-arrow-down-c" />
						</UI.ActionButtons>
					</div>
					<div className="view-header text-caps">Easily Customisable</div>
					<UI.ActionButtons className="special">
						<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')}  label="Primary"   icon="ion-android-contact" />
						<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')}  label="Secondary" icon="ion-android-contacts" />
						<UI.ActionButton onTap={this.flashAlert.bind(this, 'You tapped an action button.')}  label="Tertiary"  icon="ion-android-friends" />
					</UI.ActionButtons>
				</UI.FlexBlock>
			</UI.FlexLayout>
		);
	}
});