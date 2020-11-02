import './App.css';

import SearchBar from './components/SearchBar'

export default function App() {
  const options = ['Apples', 'Bananas', 'Berries', 'Citrus', 'Grapes']

  return (
    <div className='application'>
      <main>
        <h1>SearchBar</h1>
        <SearchBar placeholder='What fruit are you searching for?' />
      </main>
    </div>
  )
}

