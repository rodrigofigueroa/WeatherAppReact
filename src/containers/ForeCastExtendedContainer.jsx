import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForeCastExtended from '../components/ForeCastExtended/ForeCastExtended';
import {DataForecastReducer} from '../reducers/forereducer';;

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

const mapContainerForecas = state => ({ city: state.city, data: DataForecastReducer(state.cities, state.city) })

export default connect(mapContainerForecas, null)(ForeCastExtendedContainer);
