import QR from './images/QrCode.png'
import './App.css'

function App() {

  return (
    <div className="bg-[#d6e2f0] h-screen w-screen flex flex-col items-center justify-around">
      <div className='bg-white w-[25%] h-[35rem] rounded-3xl flex flex-col  items-center'>
       <div className='flex flex-col items-center text-center'>
          <img className='border h-[350px] w-[350px] rounded-3xl my-5' src={QR} alt="Qr-Code"/>
          <strong className='font-outfit font-black w-[16rem] text-[#1f3251] antialiased mb-3'>
            Improve your front-end skills by building projects
          </strong>
          <p id='corpo' className='font-outfit text-[#7b879d] w-[16rem] antialiased'>
            Scan the QR code to visit Frontend Mentor and take you coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
