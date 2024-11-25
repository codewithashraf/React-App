import { useState } from 'react'

import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useTheme } from '../hooks/useTheme'



export default function Home() {

  const [isDark] = useTheme()
  const [query, setQuery] = useState('')

  return (
    <main className={`${isDark ? 'dark' : ''}`}>
        <div id="inline" >
          <SearchBar setQuery={setQuery}/>
          <SelectMenu setQuery={setQuery}/> 
        </div>
        <CountriesList query={query}/>
    </main>
  )
}
