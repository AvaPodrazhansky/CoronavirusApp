// import "csv-parse";

function getConfirmedCases(){
    // fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-11-2020.csv')
    //     .then(res => console.log(res))
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
        //     res.forEach( row => {
        //
        //     })
        // })
}

export {
    getConfirmedCases
}
