import bgDesktop from '../assets/images/bg-pattern-desktop.svg'
import bgMobile from '../assets/images/bg-pattern-mobile.svg'
import illustrationDesktop from '../assets/images/illustration-woman-online-desktop.svg'
import illustrationMobile from '../assets/images/illustration-woman-online-mobile.svg'
import box from '../assets/images/illustration-box-desktop.svg'

const Illustration = () => {
  return (
    <>
      <div className='relative flex items-center justify-center lg:hidden'>
        <img
          src={illustrationMobile}
          alt='faq illustration'
          className='absolute bottom-8 w-[240px]'
        />
        <img src={bgMobile} alt='background' className='relative mx-auto' />
      </div>
      <div className='relative hidden lg:block'>
        <div className='overflow-hidden'>
          <img
            src={illustrationDesktop}
            alt='faq illustration'
            className='relative left-[-4rem] z-10 h-[19rem]'
          />

          <img
            src={bgDesktop}
            alt='background'
            className='absolute left-[-4rem] top-[-2rem]'
          />
        </div>
        <img
          src={box}
          alt='illutration box'
          className='absolute left-[-3rem] top-32 z-20 h-[7rem]'
        />
      </div>
    </>
  )
}

export default Illustration
