import TeamCityLogo from '/teamcity.svg'

import styles from './App.module.css'

function App() {
  return (
    <>
      <div>
        <a href="https://www.jetbrains.com/teamcity" target="_blank">
          <img src={TeamCityLogo} className={styles.logo} alt="TeamCity logo" />
        </a>
      </div>
      <h1>TeamCity</h1>
      <p className={styles.description}>
        {'TeamCity is a general-purpose CI/CD software platform that allows for flexible workflows, collaboration and development practices.'}
      </p>
    </>
  )
}

export default App
