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

// creazione dell'Array di oggetti Movie e Series
const mediaArray = [
    new Movie ('Jaws', 1975, 'Drama', 8, 'Film'),
    new TvSeries ('Breaking Bad', 2008, 'Crime', 9.5, 'Serie Tv', 5),
    new Movie ('The Godfather', 1972, 'Crime', 9.2, 'Film'),
    new TvSeries ('One Piece', 1999, 'Anime', 8.9, 'Serie Tv', 20),
    new Movie ('Interstellar', 2014, 'Sci-fi', 8.7, 'Film'),
    new TvSeries ('Dragon Ball Z', 1986, 'Anime', 9.3, 'Serie Tv', 5)
]

console.log(mediaArray)