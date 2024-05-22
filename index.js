const media = [
    { title: 'Jaws', year: 1975, genre: 'Drama', rating: 8, type: 'Film' },
    { title: 'Breaking Bad', year: 2008, genre: 'Crime', rating: 9.5, type: 'Serie Tv', seasons: 5 },
    { title: 'The Godfather', year: 1972, genre: 'Crime', rating: 9.2, type: 'Film' },
    { title: 'One Piece', year: 1999, genre: 'Anime', rating: 8.9, type: 'Serie Tv', seasons: 20 },
    { title: 'Interstellar', year: 2014, genre: 'Sci-fi', rating: 8.7, type: 'Film' },
    { title: 'Dragon Ball Z', year: 1986, genre: 'Anime', rating: 9.3, type: 'Serie Tv', seasons: 5 }
]


// creo la classe Movie 
class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title
        this.year = year
        this.genre = genre
        this.rating = rating
        this.type = type
    }

    toString() {
        const string = `${this.title} è un ${this.type} di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`
        return string
    }
}

// creo la classe TvSeries che estende la classe Movie 
class TvSeries extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type)
        this.seasons = seasons
    }

    toString() {
        const string = `${this.title} è una ${this.type} di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`
        return string
    }
}

// creo un array di istanze con map
const mediaArray = media.map((element) => {
    console.log(element.type)
    if (element.type === 'Film') {
        return new Movie(element.title, element.year, element.genre, element.rating, element.type)
    }
    if (element.type === 'Serie Tv') {
        return new TvSeries(element.title, element.year, element.genre, element.rating, element.type, element.seasons)
    }
})
console.log(mediaArray)


function findAverageRating(filmList) {
    // dichiaro varibili per la somma dei voti e il numero di film con lo stesso genere
    let sum = 0
    let counter = 0

    filmList.forEach(film => {
        console.log(film)
        sum += film.rating
        counter++
    });

    // calcolo la media
    const average = sum / counter

    return average.toFixed(2)
}
const averageRating = findAverageRating(mediaArray)
console.log('La media dei voti è:', averageRating)


function filterFilm(filmList) {
    // mappo l'array e utilizzo il metodo toString per vedere i dettagli
    const filmDetails = filmList.map(film => film.toString())
    return filmDetails
}

const filmDetails = filterFilm(mediaArray)
console.log('Dettagli dei film:', filmDetails)


function getFilmGenre(filmList) {
    const genres = []

    filmList.forEach((film => {
        console.log(film.genre)
        // ad ogni iterazione push il genere del film se non è già stato inserito
        if(!genres.includes(film.genre)) {
            genres.push(film.genre)
        }
    }))

    return genres
}

const filmGenres = getFilmGenre(mediaArray)
console.log('Lista di film senza ripetizione del genere:', filmGenres)