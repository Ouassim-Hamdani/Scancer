import uploadImg from "../../assets/uploadImg.svg"
import { useRef } from 'react'
export const Upload = () => {
    const inputRef = useRef(null)
    const onButtonClick = () => {
        inputRef.current.click();
      }
  return (
    <form id="form-file-upload" className='w-5/6 pl-8'>
      <input type="file" id="input-file-upload" ref={inputRef} multiple={true} className="hidden" />
      <label id="label-file-upload" htmlFor="input-file-upload">
        <div className='border-gray-400 space-y-2 p-10 border border-dashed rounded-2xl w-full items-center flex flex-col justify-center'>
          <img src={uploadImg} alt="" />
          <span className='text-gray-700 font-semibold text-lg'>Drag and drop, or <button onClick={onButtonClick} className="text-primary">browse</button> your files</span>
          
          
        </div> 
      </label>
    </form>
  )
}
