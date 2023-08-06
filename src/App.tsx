import dropImg from "./img/dragDrop.png";

function App() {
  return (
    <>
      <div className=" flex items-center justify-center bg-gradient-to-tr from-[#E5E9F3] to-[#DBE3ED] h-screen w-screen ">
        <div className="w-[1033px] h-screen bg-[#ff007a] bg-opacity-[8%]  absolute left-[0] top-[0] rounded-br-full   filter blur-[166.5px]"></div>
        <div className="w-[845px] h-screen rounded-tl-full bg-[#1548ab]   bg-opacity-[8%] absolute right-0 bottom-0   filter blur-[55px]"></div>
        <div className="custom-bg">
          <div className="w-full h-full flex items-end  justify-center">
            <img src={dropImg} />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <span>ატვირთეთ ფაილი </span>
              <span>ან ჩააგდეთ აქ</span>
            </div>

            <span>
              ფაილი არ უნდა აღემატებოდეს 50მბ-ს დასაშვები ფორმატი: PDF{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
