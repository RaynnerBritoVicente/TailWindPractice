import QR from './images/QrCode.png'
import './App.css'

function App() {

  return (
    <div className="bg-grayBlue-0 h-screen w-screen flex flex-col items-center justify-around">
      <div className='bg-white md:w-[25rem] md:h-[35rem] rounded-3xl flex flex-col items-center shadow-xl xs:w-[20rem] xs:h-[31rem]'>
       <div className='flex flex-col items-center text-center'>
          <img className='border md:h-[22rem] md:w-[22rem] rounded-3xl my-5 xs:h-[18rem] xs:w-[18rem]' src={QR} alt="Qr-Code"/>
          <strong className='font-outfit font-black md:w-[18rem] text-darkBlue-0 antialiased md:text-xl mb-3 xs:text-lg xs:w-[16rem]'>
            Improve your front-end skills by building projects
          </strong>
          <p className='font-outfit text-cGray-0 md:w-[18rem] antialiased xs:text-md xs:w-[18rem]'>
            Scan the QR code to visit Frontend Mentor and take you coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
