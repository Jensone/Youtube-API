const ytURL = function(){
    // Filtre de l'url youtube
    const url = document.querySelector('#url').value
    const regex = /^.+?=(.*)$/
    const match = url.match(regex)
    
    // Fetch de l'API Youtube Video Download Info
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5cb6c689fbmsh6189011acc7c267p151d7ejsnc63223a9ca8f',
            'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
        }
    };
    
    fetch('https://youtube-video-download-info.p.rapidapi.com/dl?id='+match[1], options)
        .then(response => response.json())
        .then(video => {
            console.log(video)
            document.querySelector('.thumb').innerHTML=`<img src="${video.thumb}" alt="${video.title}">`
        })
        .catch(err => console.error(err))
}