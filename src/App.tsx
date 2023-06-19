import Footer from './components/Footer'
import Accordion from './components/Accordion'
import Illustration from './components/Illustration'

import data from './data'

function App() {
  // const [accData, setAccData] = useState(data)

  return (
    <>
      <main className='grid min-h-screen place-items-center bg-gradient-to-b from-gradient-softViolet to-gradient-softBlue'>
        <div className='mt-28 flex w-[350px] flex-col gap-6 rounded-3xl bg-white pb-10 shadow-2xl lg:mt-0 lg:w-auto lg:max-w-4xl lg:flex-row lg:py-12 lg:pr-20'>
          <Illustration />
          <div className='lg:w-80'>
            <h1 className='pb-4  text-center text-3xl font-bold lg:text-left'>
              FAQ
            </h1>
            <Accordion data={data} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
