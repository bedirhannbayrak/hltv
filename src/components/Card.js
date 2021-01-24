import React from 'react';
import PropTypes from 'prop-types';


/*
const Card = (props) => {
    return (
        <div className="card w-100">
            <img src={props.image} className="card-img-top h-50" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text"><small className="text-muted">{props.updateTime}</small></p>
            </div>
        </div>
    );
};
*/

class Card extends React.Component {
    render() {
        return (
            <div className="card w-100">
                <img src={this.props.image} className="card-img-top h-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <p className="card-text"><small className="text-muted">{this.props.updateTime}</small></p>
                </div>
            </div>
        )
    }

}

Card.defaultProps = {
    cardTitle: "Default Card Title"
}

Card.propTypes = {
    cardText : PropTypes.string.isRequired
};


export default Card;
