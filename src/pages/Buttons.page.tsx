import DaButton from "../components/ui/button/DaButton";
import DaTypography from "../components/ui/typography/DaTypography";


export default function ButtonsPage() {
    return (
      <div>
              
        <section className='p-5 w-full bg-background smooth-transition min-h-screen flex flex-wrap flex flex-wrap-col items-center justify-center gap-10 '>
        <div className='   '>

        <div className="mb-10">
          <DaTypography variant='displayMd' align="center">
            Buttons
          </DaTypography>
          
        </div>

          <DaTypography className="mt-10 " variant='titleLg' align="center">
            Use-cases
          </DaTypography>
        <div className='flex flex-wrap p-5 gap-5 w-full justify-center '>
          <DaButton variant="primary" size="md" to="/">
            Primary
          </DaButton>
          <DaButton variant="primary" loading size="md" to="/">
            Loading
          </DaButton>
          <DaButton variant="primary" disabled size="md" >
            Disabled
          </DaButton>
          <DaButton variant="secondary" prefixIcon="notification" size="md" >
            Prefix Icon
          </DaButton>
          
          <DaButton variant="outline" iconOnly icon="search" size="md"  label="Search" />
            
          <DaButton variant="danger" suffixIcon="logout" size="md" >
            Suffix Icon
          </DaButton>
        </div>
        <DaTypography className="mb-5 mt-5" variant='titleLg' align="center">
            Large Sizes
          </DaTypography>

        <div className='flex flex-wrap   gap-5 w-full justify-center '>
          <DaButton variant="primary" size="lg" to="/">
            Back
          </DaButton>
          <DaButton variant="primary" size="lg" >
            Primary
          </DaButton>
          <DaButton variant="secondary" size="lg" >
            Secondary
          </DaButton>
          <DaButton variant="outline" size="lg" >
            Outline
          </DaButton>
          <DaButton variant="ghost" size="lg" >
            Ghost
          </DaButton>
          <DaButton variant="danger" size="lg" >
            Danger
          </DaButton>
        </div>
                <DaTypography className="mt-10 " variant='titleLg' align="center">
            Medium Sizes
          </DaTypography>
        <div className='flex flex-wrap p-5 gap-5 w-full justify-center '>
          <DaButton variant="primary" size="md" to="/">
            Back
          </DaButton>
          <DaButton variant="primary" size="md" >
            Primary
          </DaButton>
          <DaButton variant="secondary" size="md" >
            Secondary
          </DaButton>
          <DaButton variant="outline" size="md" >
            Outline
          </DaButton>
          <DaButton variant="ghost" size="md" >
            Ghost
          </DaButton>
          <DaButton variant="danger" size="md" >
            Danger
          </DaButton>
        </div>
                <DaTypography className="mt-10 " variant='titleLg' align="center">
            Small Sizes
          </DaTypography>
        <div className='flex flex-wrap p-5 gap-5 w-full justify-center '>
          <DaButton variant="primary" size="sm" to="/">
            Back
          </DaButton>
          <DaButton variant="primary" size="sm" >
            Primary
          </DaButton>
          <DaButton variant="secondary" size="sm" >
            Secondary
          </DaButton>
          <DaButton variant="outline" size="sm" >
            Outline
          </DaButton>
          <DaButton variant="ghost" size="sm" >
            Ghost
          </DaButton>
          <DaButton variant="danger" size="sm" >
            Danger
          </DaButton>
        </div>


        
        </div>
        
      </section>
      </div>
    )
  }

