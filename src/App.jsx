import underconstruction from './assets/underconstruction.jpg'
const App = () => {
  return (
    <div className='h-screen bg-[#0f1a38] flex justify-center items-center'>
      <div className='w-1/3 max-lg:w-full m-8 rounded-lg overflow-hidden shadow-md shadow-black'>
        <img src={underconstruction} alt="Under Construction" className='w-full' />
      </div>
    </div>
  )
}

export default App
