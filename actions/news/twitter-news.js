const EMBED_HTML = 'EMBED_HTML';
const embedHtml = html => {
    return {
        type: EMBED_HTML,
        payload: html
    }
};

function fetchTwitterNews(tweetTimelineURL) {
    let tweetURL = 'https://publish.twitter.com/oembed?url=' + encodeURIComponent(tweetTimelineURL);
    fetch(tweetTimelineURL, {method: 'GET', headers: {Accepts: 'application/json'}}).then(
        resp => {
            resp.json().then(json => {
                let html = json.html;
                embedHtml(html);
            })
        }
    )
}

export {
    EMBED_HTML,
    fetchTwitterNews
}
