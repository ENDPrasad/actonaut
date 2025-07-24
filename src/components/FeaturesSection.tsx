import SubHeader from "./smallComponents/SubHeader"
import testFlask from '../assets/test-flask.svg'
import challenge from '../assets/challenge.svg'
import code from '../assets/code.svg'
import theme from "../../theme"
import Feature from "./smallComponents/Feature"


function FeaturesSection() {
    const mainColor = theme.palette.primary.light
    const textColor = theme.palette.background.default

  return (
    <div id="Features" className='px-8 py-4' style={{backgroundColor: mainColor, color: textColor}}>
        <SubHeader text="features"/>
        <div className="flex justify-around align-middle my-6 gap-3 pb-8">
            <Feature image={testFlask} altText="Practice real world scenarios image" description="Practice every possible real world scenario" />
            <Feature image={code} altText="Explanation with sample snippets image" description="Simple explanation and helpful code snippets" />
            <Feature image={challenge} altText="Challenges image" description="Challenges & Interview Questions" />
        </div>
    </div>
  )
}

export default FeaturesSection
