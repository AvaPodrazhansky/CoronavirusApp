// function getDailyData(){
//     return fetch(
//         'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv',
//         {
//             method: 'GET',
//         })
//         .then(res => res.text())
//         // .then(res => console.log(res))
//         .then(res => {
//             const arrayOfStrings = res.split('\n');
//             console.log(arrayOfStrings);
//             return arrayOfStrings
//         })
//         .then(res => {
//
//             // res.slice(1).forEach( row => {
//             //     const arrayOfStrings = res.split(',');
//             // })
//             const result = res.slice(1).map(row => {
//                 // row.split(',')
//
//
//             });
//             // console.log(result[result.length - 2]);
//             // result.forEach(row => console.log(row.length))
//             return result;
//         })
//
// }

import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

// function _getFileName() {
//     const owner = 'CSSEGISandData';
//     const name = 'COVID-19';
//     const branch = 'master';
//     const folder = 'csse_covid_19_daily_reports';
//     let query = new GraphQLObjectType({
//         '{' +
//                 'repository(owner: \"' + owner + '\", name: \"' + name + '\") {' +
//             'object(expression: \"' + branch + '\'":\"' + folder + '\") {' +
//             '... on Tree{' +
//             'entries{' +
//             'name' +
//             '}' +
//             '}' +
//             '}' +
//             '}' +
//             '}'
//     })
// }

// async function _getFileName() {
//     const owner = 'CSSEGISandData';
//     const name = 'COVID-19';
//     const branch = 'master';
//     const folder = 'csse_covid_19_daily_reports';
//     const { repository } = await graphql(
//         `
//     {
//       repository(owner: "CSSEGISandData", name: "COVID-19") {
//         issues(last: 3) {
//           edges {
//             node {
//               title
//             }
//           }
//         }
//       }
//     }
//   `,
//         {
//             headers: {
//                 authorization: `token secret123`
//             }
//         }
//     );
// }
//
// function _getFiles() {
//     return fetch(
//         'https://github.com/CSSEGISandData/COVID-19/commits',
//         {
//             method: 'GET',
//         })
// }

const REQUEST_DAILY_DATA = 'REQUEST_DAILY_DATA';
const requestDailyData = () => {
    return {
        type: REQUEST_DAILY_DATA
    }
};

const RECEIVE_DAILY_DATA_SUCCESS = 'RECEIVE_DAILY_DATA_SUCCESS';
const receiveDailyDataSuccess = data => {
    return {
        type: RECEIVE_DAILY_DATA_SUCCESS,
        payload: data
    }
};

const RECEIVE_DAILY_DATA_ERROR = 'RECEIVE_DAILY_DATA_ERROR';
const receiveDailyDataError = errorMessage => {
    return {
        type: RECEIVE_DAILY_DATA_ERROR,
        payload: errorMessage
    }
};
//
// function _splitArray(array) {
//     array = array.map(item => {
//         let result = item.split('\"');
//         if (result.length > 1) {
//             let temp = result.pop();
//             temp = temp.split(',').slice(1);
//             return result.concat(temp);
//         } else {
//             return item.split(',')
//         }
//     });
//     array.pop();
//     return array;
// }
//
// function _formatArrayDisasterToActualUsableJavascriptObject(array) {
//     return array.map(item => ({
//         provinceOrState: item[0],
//         countryOrRegion: item[1],
//         lastUpdate: item[2],
//         confirmed: Number(item[3]),
//         deaths: Number(item[4]),
//         recovered: Number(item[5]),
//         latitude: Number(item[6]),
//         longitude: Number(item[7])
//     }))
// }
//
// function _formatResult(result) {
//     let temp = result.split('\n');
//     temp = _splitArray(temp);
//     return _formatArrayDisasterToActualUsableJavascriptObject(temp).splice(1)
// }

function getDailyData() {
    // TODO: Store data locally after first api call. I'm not sure if this is causing the long render time
    // TODO: Ensure that we are getting the most recent data
    // TODO: Add something if the array is split into a size other than 8
    // TODO: Add catch
    return dispatch => {
        dispatch(requestDailyData());
        return fetch(
            'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv',
            {
                method: 'GET',
            })
            .then(res => res.text())
            // .then(res => _formatResult(res))
            .then(data => dispatch(receiveDailyDataSuccess(data)))
            .catch(err => dispatch(receiveDailyDataError(err)))
    }
}

export {
    getDailyData,
    REQUEST_DAILY_DATA,
    requestDailyData,
    RECEIVE_DAILY_DATA_SUCCESS,
    receiveDailyDataSuccess,
    RECEIVE_DAILY_DATA_ERROR,
    receiveDailyDataError,
}