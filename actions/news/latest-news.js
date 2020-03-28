function fetchLatestNews(){
    const d = new Date();
    const date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    const url = 'https://newsapi.org/v2/top-headlines?' +
        'sources=nbc-news,cnn,abc-news,fox-news,cbs-news&' +
        'q=coronavirus&' +
        'from=' + date + '&' +
        //'sortBy=popularity&' +
        'apiKey=2d5289762b3b4da791ba70f3fcedd3de';


    return async dispatch => {
        // dispathc(requestData)
        let result = await fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                return res
            });
        // .then(res => dispatch(receiveSucces))
        // .catch(err => dispatch(receiveDataError))

        return result
    }
}

export {
    fetchLatestNews
}