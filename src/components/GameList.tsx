import {GameListItem, GameListItemType} from "./GameListItem.tsx";
import {Text} from "./Text.tsx";
import {Title} from "./Title.tsx";

interface GameListType {
  gameList: GameListItemType[];
  onClickItem: () => void;
}
export const GameList = ({gameList}: GameListType) => {
  return (
    <div className="h-96 w-screen px-44 py-14 justify-center items-center gap-14 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
        <Title>Tracked Games</Title>
      </div>

      <div className="grow shrink basis-0 flex-col justify-center items-center inline-flex">
        {gameList.length ? (gameList.map(item => <GameListItem {...item}/>)) : (
          <Text>Nothing tracked so far...</Text>
        ) }
      </div>
    </div>
  )
}