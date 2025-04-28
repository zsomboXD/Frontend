import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const SearchBox=({items,})=> {

    const navigate=useNavigate()

  const handleOnSearch = (string, results) => {

    console.log(string, results)
  }

  const handleOnHover = (result) => {

    console.log(result)
  }

  const handleOnSelect = (item) => {

    console.log(item.id)
    navigate('/detail/'+item.id)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        {/*<span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>*/}
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400. }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={{zIndex:'100'}}
          />
        </div>
      </header>
    </div>
  )
}