import {CheckSquare, Square} from "@phosphor-icons/react";

export interface AchievementItemType {
  name: string;
  description: string;
  completed?: string;
}
export const AchievementItem = ({name, description, completed}: AchievementItemType) => {
  return (
    <div className="self-stretch h-24 flex-col justify-center items-center flex">
      <div className="self-stretch justify-start items-start gap-10 inline-flex">
        <div className="grow shrink basis-0 h-24 py-5 justify-center items-center gap-4 flex">
          {completed ? (
            <CheckSquare size={32} color="#f7f7f7" weight="fill" />
          ) : (
            <Square size={32} color="#f7f7f7" weight="fill" />
          )}
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-gray-50 text-xl font-normal font-['Roboto'] leading-7">
              {name}
            </div>
            <div
              className="self-stretch text-gray-50/50 text-base font-normal font-['Roboto'] leading-normal">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}