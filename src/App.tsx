
import './App.css'
import DaTypography from './components/ui/typography/DaTypography'

function App() {

  return (
    <>
      <section className='p-5 w-full bg-background smooth-transition min-h-screen flex flex-col items-center justify-center gap-5 '>
 
        <DaTypography variant='displayLg' align="center">
          Da Design System
        </DaTypography>
        <DaTypography variant='headlineSm' align="center"  className='w-full !min-w-[30px] !font-light text-text-secondary'>
         Custom Design system for building data-centric applications by Daniel Agu
        </DaTypography>
        
      </section>
    </>
  )
}

export default App
