import Dropzone from './components/DropZone'

function App() {

  
  return (
      <div className=" flex items-center justify-center bg-gradient-to-tr from-[#E5E9F3] to-[#DBE3ED] h-screen w-screen ">
        <div className="w-[1033px] h-screen bg-[#ff007a] bg-opacity-[8%]  absolute left-[0] top-[0] rounded-br-full   filter blur-[166.5px]"></div>
        <div className="w-[845px] h-screen rounded-tl-full bg-[#1548ab]   bg-opacity-[8%] absolute right-0 bottom-0   filter blur-[55px]"></div>
        <div className="custom-bg gap-[24px]" >
          <div className="w-full h-full flex items-end  justify-center " >
            {/* <div {...getRootProps()}>
            <input {...getInputProps()}/>
            <img src={dropImg} className={`${!isDragActive ?"hover:animate-pulse": "hover:animate-bounce"}`}  />
            </div> */}
            <div>

            <Dropzone/>
            </div>
          
          </div>
          <div className="w-full h-full flex flex-col items-center justify-between ">
            <div className="flex flex-col items-center">
              <span className="text-center  text-gray-800 font-semibold text-[14px] uppercase">ატვირთეთ ფაილი</span>
              <span className="text-center text-gray-800 font-normal text-[12px]">ან ჩააგდეთ აქ</span>
            </div>
                <div className="flex flex-col w-full p-6 items-center justify-center ">

            <span className="text-[12px] text-[#757575] ">
              ფაილი არ უნდა აღემატებოდეს 50მბ 
            </span>
            <span className="text-[12px] text-[#757575] mb-8 ">
              დასაშვები ფორმატი: PDF
            </span>
             </div>
          </div>
        </div>
      </div>
  );
}

export default App;
