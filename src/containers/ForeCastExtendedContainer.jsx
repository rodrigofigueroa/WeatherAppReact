import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForeCastExtended from '../components/ForeCastExtended/ForeCastExtended';
import { getCity, DataForecastReducer } from '../reducers';

const ForeCastExtendedContainer = props => {
        const { city, data} = props;
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

const mapContainerForecas = state => ({ city: getCity(state), data: DataForecastReducer(state) })

export default connect(mapContainerForecas, null)(ForeCastExtendedContainer);
