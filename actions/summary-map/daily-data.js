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

function _getFiles() {
    return fetch(
        'https://github.com/CSSEGISandData/COVID-19/commits',
        {
            method: 'GET',
        })
}


function getDailyData() {
    // let d = new Date();
    // TODO: Ensure that we are getting the most recent data
    return fetch(
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv',
        {
            method: 'GET',
        })
        .then(res => res.text())
        .then(res => res.split('\n'))
        .then(res => (
            res.map((item, index) => {
                let result = item.split('\"');
                if (result.length > 1) {
                    let temp = result.pop();
                    temp = temp.split(',').slice(1);
                    return result.concat(temp);
                } else {
                    return item.split(',')
                }
            })
        ))
        .then(res => {
            res.pop();
            return res;
        })
        .then(res => res.map(item => ({
            provinceOrState: item[0],
            countryOrRegion: item[1],
            lastUpdate: item[2],
            confirmed: item[3],
            deaths: item[4],
            recovered: item[5],
            latitude: item[6],
            longitude: item[7]
        })))
}

export {
    getDailyData
}