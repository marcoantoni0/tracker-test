export const NewFileUpload = () => {
  return (
    <div className="h-80 w-screen px-44 py-14 border border-black justify-center items-center gap-14 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-gray-50 text-4xl font-bold font-['Roboto'] leading-10">Add New Game</div>
        <div className="self-stretch text-gray-50 text-base font-normal font-['Roboto'] leading-normal">Upload an HTML
          file to track achievements
        </div>
      </div>
      <div
        className="w-96 h-48 px-3.5 py-3 border border-gray-50 flex-col justify-center items-center gap-10 inline-flex">
        <div className="self-stretch text-gray-50 text-sm font-medium font-['Roboto'] leading-tight">Upload an HTML
          File
        </div>
        <div
          className="self-stretch text-center text-gray-50/50 text-base font-normal font-['Roboto'] leading-none">Drag
          and Drop you HTML or...
        </div>
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="h-12 p-3 bg-gray-50 rounded-lg flex-col justify-center items-center flex">
            <div className="text-gray-950 text-base font-medium font-['Roboto'] leading-normal">Upload File</div>
          </div>
        </div>
      </div>
    </div>
  )
}