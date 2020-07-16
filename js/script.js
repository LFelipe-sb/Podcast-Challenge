// window.addEventListener('load', start);
//Ao usar o defer no HTML, é a mesma coisa de estar aplicando tudo dentro do Window.load.

var inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
var rangeFrequency = document.querySelector('#rangeFrequency');
var divPodcasts = document.querySelector('#divPodcasts');
var divFavoriteFrequency = document.querySelector('#divFavoriteFrequency');

function start(){
    rangeFrequency.addEventListener('input', handleRangeValueChange);
}

function handleRangeValueChange(){
    currentFrequency = rangeFrequency.value;
    inputCurrentFrequency.value = currentFrequency;

    findPodcastFrom(currentFrequency); 
}

function findPodcastFrom(frequency){
    var foundPodcast = null;
    for(var i = 0; i < podcastsData.length; i++){
        var currentPodcast = podcastsData[i];
        
        if(currentPodcast.id === frequency){
            foundPodcast = currentPodcast;
            break;
        }
    }

    if(!!foundPodcast){
        renderItens(foundPodcast);
    } else {
        divPodcasts.innerHTML = '';
        divPodcasts.innerHTML = '<p>Nenhum Podcast localizado nesta frequência.</p>';
    }
}

function renderItens(podcast){
    divPodcasts.innerHTML = '';

    var connect = document.createElement('h4');
    connect.textContent = 'Quer ter acesso ao site oficial do Podcast e ver todas as playlists?';

    var link = document.createElement('a');
    link.href = podcast.link;
    link.textContent = "Clique Aqui."

    var img = document.createElement('img');
    img.src = './img/' + podcast.img;
    img.alt = 'Logo do Podcast: ' + podcast.title;
    img.title = podcast.title;

    var h2 = document.createElement('h2');
    h2.textContent = podcast.title;

    var p = document.createElement('p');
    p = podcast.description;
    
    divPodcasts.append(connect);
    divPodcasts.append(link)
    divPodcasts.append(img);
    divPodcasts.append(h2);
    divPodcasts.append(p);
}   

start();
