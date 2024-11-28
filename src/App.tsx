import 'tailwindcss/tailwind.css'
import {AchievementsList, GameList, Header} from "./components";
import {useState} from "react";

function App() {
  const [checkAchievements, setCheckAchievements] = useState<string | undefined>();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleAchievementClose = () => {
    setCheckAchievements(undefined);
  }

  const handleClickGame = () => {
    {/* fetch achievements list from SQLite*/}

    // setAchievementsData({})

    // setCheckAchievements(true);
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className="w-screen h-screen bg-gray-50 dark:bg-gray-950 flex-col justify-start items-center inline-flex">
        <Header isDarkMode={isDarkMode} switchColor={() => setIsDarkMode(state => !state)}/>

        <div className="h-96 justify-start items-start inline-flex">
          <GameList gameList={[]} onClickItem={handleClickGame}/>
          {/* fetch list from SQLite*/}

          {checkAchievements && (
            <AchievementsList open={checkAchievements} onClose={handleAchievementClose}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

/*
* SQLite
* games table
* id
* name
* total
* done
*
* achievements table
* name
* description
* done
*
* game to achievements
* id
* game id
* achievement id
*
* */