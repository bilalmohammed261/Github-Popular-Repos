import {Component} from 'react'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// console.log(languageFiltersData)

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeLanguageTabId: languageFiltersData[0].id,
  }

  onChangeLanguageFilter = id => {
    this.setState({activeLanguageTabId: id})
  }

  render() {
    const {activeLanguageTabId} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Popular</h1>
        <ul className="filters-list">
          {languageFiltersData.map(eachLanguageData => (
            <LanguageFilterItem
              key={eachLanguageData.id}
              eachLanguageData={eachLanguageData}
              onChangeLanguageFilter={this.onChangeLanguageFilter}
              isActive={activeLanguageTabId === eachLanguageData.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
