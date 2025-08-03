import { BACKGROUND_GRADIENT } from "../../helper/contants"
import Steps from "../smallComponents/Steps"
import SubHeader from "../smallComponents/SubHeader"

function HowItWorks() {

  return (
     <div id="how-it-works" className='px-8 py-8' style={BACKGROUND_GRADIENT}>
        <SubHeader text="How it works?"/>
        <div className="mt-8">
            <Steps />
        </div>
    </div>
  )
}

export default HowItWorks
