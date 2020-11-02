import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar({ options, placeholder }) {
    return (
        <div className='searchBar'>
            <div className='searchBar__main'>
                <AiOutlineSearch />
                <input placeholder={placeholder}></input>
            </div>  
        </div>
    )
}