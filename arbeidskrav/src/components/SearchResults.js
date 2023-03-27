//Kilde handlesubmit: https://upmostly.com/tutorials/react-onchange-events-with-examples 

export default function SearchResults({getMovies, setResultat}){
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearch = (event) => {
        if(event.target.value > 2) {
            setResultat(event.target.value)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Søk dine filmer her.." onChange={handleSearch} />
            <input type="submit" onClick={getMovies} value="Søk" />
        </form>
    )
}