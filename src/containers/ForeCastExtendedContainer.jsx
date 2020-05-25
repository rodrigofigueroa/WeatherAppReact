import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastExtended from '../components/ForeCastExtended/ForeCastExtended';
import { connect } from 'react-redux';

class ForeCastExtendedContainer extends Component {
    
    render() {        
        return (
            <ForeCastExtended 
                cityForeCast={
                                this.props.city 
                            ? 
                                this.props.city 
                            : 
                                '...Waiting' 
                            }/>
        );
    }
}


ForeCastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired
};

const mapContainerForecas = ({ city }) => ({ city })

export default connect(mapContainerForecas, null)(ForeCastExtendedContainer);
