
import './App.css'
import DaButton from './components/ui/button/DaButton'
import DaTypography from './components/ui/typography/DaTypography'
import { ThemeSwitch } from './theme/ThemeSwitch'

function App() {

  return (
    <>
      <section className='p-5 w-full bg-background smooth-transition min-h-screen flex flex-col items-center justify-center gap-10 '>
        <div className='   '>

        <DaTypography variant='displayLg' align="center">
          Da Design System
        </DaTypography>
        <DaTypography variant='titleLg' align="center">
          Design system for building data-centric applications.
        </DaTypography>

        <div className='flex flex-wrap mt-10 p-5 gap-5 w-full justify-center '>
          <DaButton variant="primary" size="md" to="/buttons">
            Buttons
          </DaButton>
          <DaButton variant="primary" size="md" to="/typography">
            Typography
          </DaButton>
          <DaButton variant="primary" size="md" to="/input-fields">
            Input fields
          </DaButton>
          <ThemeSwitch />
        </div>

        
        </div>
        
      </section>
    </>
  )
}

export default App
