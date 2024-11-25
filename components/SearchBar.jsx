

export default function SearchBar({setQuery}) {
  return (
    <div id="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" id="searching" placeholder="Search for a country"/>
    </div>
  )
}
