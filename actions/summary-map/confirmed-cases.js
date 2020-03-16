// import "csv-parse";
// const z = require('zebras');
// const d3 = require("d3");
//
// function getConfirmedCases(){
//     const data = d3.csv("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv")
//     console.log(data);
// }

function getConfirmedCases(){
    return fetch(
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
        {
            method: 'GET',
        })
        .then(res => res.text())
        // .then(res => console.log(res))
        .then(res => {
            const arrayOfStrings = res.split('\n');
            console.log(arrayOfStrings);
            return arrayOfStrings
        })
        .then(res => {

            // res.slice(1).forEach( row => {
            //     const arrayOfStrings = res.split(',');
            // })
            const result = res.slice(1).map(row => {
                // row.split(',')


            });
            // console.log(result[result.length - 2]);
            // result.forEach(row => console.log(row.length))
            return result;
        })

}

function getMostRecentCases(){
    return fetch(
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-11-2020.csv',
        {
            method: 'GET',
        })
        .then(res => res.text())
        // .then(res => console.log(res))
        .then(res => {
            const arrayOfStrings = res.split('\n');
            console.log(arrayOfStrings);
            return arrayOfStrings
        })
        // .then(res => {
        //     res.slice(1).forEach( row => {
        //         const
        //             })
        // })
    // TODO: AP finish formatting
}

export {
    getConfirmedCases,
    getMostRecentCases
}
