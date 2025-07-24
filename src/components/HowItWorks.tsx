import Steps from "./smallComponents/Steps"
import SubHeader from "./smallComponents/SubHeader"


function HowItWorks() {

  return (
     <div className='px-8 py-4'>
        <SubHeader text="How it works?"/>
        <div className="">
            <Steps />
        </div>
    </div>
  )
}

export default HowItWorks
