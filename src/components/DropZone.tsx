import  {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import dropImg from "../img/dragDrop.png"


function Dropzone() {
    const [files,setFiles] = useState<any>([])
    const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles: any)=> {
    setUploading(true);
    setUploadProgress(0);
 if (acceptedFiles?.[0]?.type === "application/pdf"
  ) {
    setFiles((previousFiles: any)=> [
        ...previousFiles, 
        ...acceptedFiles.map((file:any)  => Object.assign(file,{preview: URL.createObjectURL(file)}))
    ]
       )
     
 }else{
  alert("გთხოვთ ატვირთოთ მხოლოდ PDF ფაილი")
 }
 const interval = setInterval(() => {
  setUploadProgress((prevProgress) => prevProgress + 1);
}, 30);

setTimeout(() => {
  clearInterval(interval);
  setUploadProgress(100);
  setUploading(false);
}, 3000);
 
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
  //    accept: {
  //   'application/pdf/*' : []
  // }
// maxSize= 50 * 1024 * 1024,
})



// const handleDelete = (name: string)=> {
//   setFiles((files:any) => files.filter((file: any)=> file.name !== name))
// }
  return (<>
    <div {...getRootProps()}>
      <input {...getInputProps()} width={200} height={200} />
      <input {...getInputProps()} width={200} height={200} />
        {uploading ? (
          <div className="relative">
            <div className="w-[200px] h-4  " 
            >
              <div
                className="rounded-full  bg-blue-600 "
                style={{ width: `${uploadProgress}%`, height: '100%' }}
              > {uploadProgress}</div>
            </div>
            {/* <img
              src={dropImg}
              className={`${isDragActive ? 'animate-bounce' : 'hover:animate-pulse'} text-blue-500 filter drop-shadow-lg absolute top-0 left-0`}
            /> */}
          </div>
        ) : (
          <img
            src={dropImg}
            className={`${isDragActive ? 'animate-bounce' : 'hover:animate-pulse'} text-blue-500 filter drop-shadow-lg`}
          />
        )}
            {/* <img src={dropImg} className={`${isDragActive ?"animate-bounce": "hover:animate-pulse"} text-blue-500 filter drop-shadow-lg`}   />

              </div>
            
            <div>
              {files?.map((file : any)=>{
                return<div key={file.name}> 
                <img src={file.preview} alt='image' width={100} height={100} />
                
                <button onClick={()=> handleDelete(file.name)}>delete</button>
                </div>
                
                
              } )} */}
             
            </div>
              </>
  )
}
export default Dropzone