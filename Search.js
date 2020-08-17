import React, { Component } from 'react'
import axios from 'axios'
const DEFAULT_QUERY = 'redux'
const PATH_BASE = 'https://hn.algolia.com/api/v1'
const SERACH = '/search'
const PRAM_SEARCH = 'query='
const PRAM_PAGE = 'page='
// const PAGE = 0
const DEFAULT_HPP = 1
const PRAM_HPP = 'hitsPerPage='

class Search extends Component {
  constructor (pros) {
    super(pros)
    this.state = {
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      results: null,
      error: null
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.getHits = this.getHits.bind(this)
    this.setHits = this.setHits.bind(this)
  }

  componentDidMount () {
    const { searchTerm } = this.state
    this.setState({ searchKey: searchTerm })
    this.getHits(searchTerm)
    console.log(this.state)
  }

  handleInput (e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleNext () {
    const { results, searchTerm, searchKey } = this.state
    this.getHits(searchTerm, results[searchKey].page + 1)
  }

  getHits (searchTerm, page = 0) {
    axios
      .get(
        `${PATH_BASE}${SERACH}?${PRAM_SEARCH}${searchTerm}&${PRAM_PAGE}${page}&${PRAM_HPP}${DEFAULT_HPP}`
      )
      .then(res => this.setHits(res.data))
      .catch(error => this.setState({ error }))
  }

  setHits (result) {
    const { hits, page } = result
    const { results, searchKey, searchTerm } = this.state

    const oldHits = results && results[searchKey] ? results[searchKey].hits : []
    const updatedHits = [...oldHits, ...hits]
    this.setState({
      searchKey: searchTerm,
      results: {
        ...results,
        [searchKey]: {
          hits: updatedHits,
          page
        }
      }
    })
    console.log(this.state)
  }

  handleSearch () {
    const { searchKey, searchTerm, results } = this.state
    this.setState({ searchKey: searchTerm })
    if (!results[searchKey]) {
      this.getHits(searchTerm)
    }
  }

  render () {
    const { searchKey, results, error } = this.state
    // if (error) {
    //   return <p>something was wrong</p>
    // }
    return (
      <div>
        <h1 className='w-auto py-4 text-4xl text-center text-pink-400'>
          Hacker News Fetching
        </h1>
        <input
          className='w-1/2 p-2 mx-4 border-2'
          type='text'
          onChange={this.handleInput}
          value={this.state.searchTerm}
        />
        <button
          onClick={this.handleSearch}
          className='w-1/5 h-10 bg-blue-400 shadow-2xl'
        >
          Search
        </button>
        <button onClick={this.handleNext} className='bg-orange-400'>
          Next Page
        </button>

        {error ? (
          <div className='text-blue-400'>wrong</div>
        ) : (
          results &&
          results[searchKey] &&
          results[searchKey].hits.map(hit => (
            <li
              className='px-6 py-2 text-2xl text-purple-600 list-none'
              key={hit.id}
            >
              <a href={hit.url}>{hit.title}</a>
            </li>
          ))
        )}
      </div>
    )
  }
}

export default Search
