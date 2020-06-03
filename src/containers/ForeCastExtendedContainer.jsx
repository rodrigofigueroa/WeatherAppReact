import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForeCastExtended from '../components/ForeCastExtended/ForeCastExtended';

const ForeCastExtendedContainer = props => {
        const { city, data, ZIP} = props;
        // console.log(props)
        return (
            <ForeCastExtended 
                cityForeCast={
                                city
                            ? 
                                {city, data}
                            : 
                                '...Waiting' 
                            }/>
        );
    }


ForeCastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired
};

const mapContainerForecas = ({ city , cities, ZIP }) => ({ city, data: cities[city], ZIP })

export default connect(mapContainerForecas, null)(ForeCastExtendedContainer);
