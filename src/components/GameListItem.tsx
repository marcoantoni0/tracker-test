export interface GameListItemType {
  name: string;
  total: number;
  done: number;
}
export const GameListItem = ({name, total, done}: GameListItemType) => {
  return (
    <div className="self-stretch justify-start items-start gap-10 inline-flex">
      <div className="grow shrink basis-0 self-stretch py-5 justify-center items-center gap-4 flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch text-gray-50 text-xl font-normal font-['Roboto'] leading-7">{name}</div>
          <div className="self-stretch text-gray-50/50 text-base font-normal font-['Roboto'] leading-normal">
            {done}/{total} completed
          </div>
        </div>
      </div>
    </div>
  )
}