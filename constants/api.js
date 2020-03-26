function _getParamString(params){
    return Object.keys(params).map(function (key) {
        return key + '=' + params[key];
    }).join('&');
}

function fetchGoogleData(request, params) {
    return fetch(request + _getParamString({
        ...params,
        key: 'AIzaSyCSRIA9zqC3h-08MF1M28f2UQjCwGwOkFY'
    }))
        .then(res => res.json())
}

export {
    fetchGoogleData
}