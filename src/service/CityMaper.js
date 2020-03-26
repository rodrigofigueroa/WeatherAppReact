export const CityMaper = (city) => {
    // console.log(city);
    // debugger
    switch(city){
        case 'Mexico City, mx':
            // console.log(`city: ${city}`)
            // return [['3827406','Benito Juarez']]
            return [
                { idCity: '3827406', cityName: 'Benito Juarez'},
                { idCity: '3521305', cityName: 'Polanco'},
                { idCity: '3970677', cityName: 'San Carlos Ecatepec'}

            ]                
        case 'London, uk':
            return [
                {idCity: '2650225', cityName: 'Edinburgh'},
                {idCity: '7535661', cityName: 'London Borough of Harrow'},
                {idCity: '2643741', cityName: 'City of London'},
                {idCity: '2643743', cityName: 'London'}
            ]                
        case 'Canada, CA':
            return [
                {idCity: '6173331', cityName: 'Vancouver'},
                {idCity: '6167865', cityName: 'Toronto'},
                {idCity: '6115047', cityName: 'Québec'},
                {idCity: '6325494', cityName: 'Québec'},
                {idCity: '5379439', cityName: 'Ontario'},
                {idCity: '6141242', cityName: 'Saskatchewan'}
            ]                                
        case 'Helsinki, FI':
            return [
                {idCity: '658225', cityName: 'Helsinki'}
            ]                
            default :
            return [{idCity : 'Click in the country of you like'}, {cityName : 'nothing'}]
    }
}