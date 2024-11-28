import {AchievementItem, AchievementItemType} from "./AchievementItem.tsx";
import {X} from "@phosphor-icons/react";

export interface AchievementsListType {
  open?: string;
  onClose: () => void;
}
export const AchievementsList = ({ open, onClose }: AchievementsListType) => {
  const gameName = '';
  const achievements: AchievementItemType[] | [] = [];
  console.log(open)

  return (
    <div className="h-96 px-44 py-14 flex-col justify-center items-center gap-14 inline-flex">
      <div className="self-stretch h-96 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-gray-50 text-4xl font-bold font-['Roboto'] leading-10">
            {gameName}
          </div>
          <div className="w-6 h-6 relative" onClick={onClose}><X size={32} color="#f7f7f7" /></div>
        </div>

        {achievements.length ? achievements.map(item => {
          return <AchievementItem {...item} />
        }) : (
          <p>Nothing to achieve here</p>
        )}
      </div>
    </div>
  )
}