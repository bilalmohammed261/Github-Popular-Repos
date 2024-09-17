// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguageData, onChangeLanguageFilter, isActive} = props
  const {id, language} = eachLanguageData
  const btnClass = isActive ? 'active btn' : 'btn'

  const onClickTabItem = () => {
    onChangeLanguageFilter(id)
  }

  return (
    <li className="language-item">
      <button className={btnClass} type="button" onClick={onClickTabItem}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
