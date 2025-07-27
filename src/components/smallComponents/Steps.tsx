import searchImage from '../../assets/search-illustration.svg'
import Step from "./Step";
import readImage from '../../assets/read-illustration.svg'
import practiceImage from '../../assets/automate-illustration.svg'


function Steps() {

  return (
    <div className="grid grid-cols-1 gap-12 md:px-32">
          <Step step='1' heading='Search for the topic you want to master' description="Go to category section → Click on / search the topic you want to learn" altText="Search Illustration" image={searchImage} /> 
          <Step step='2' heading='Understand the Concept' description="Read the on point description about the topic and also real-world examples with visuals" image={readImage} reverse={true} altText="Reading Illustration" /> 
          <Step step='3' heading='Practice the Scenario' description="Practice the meaningful scenarios what actual automation engineers automate with proper testcases including positive and negative scenarios." altText="Practice Illustration" image={practiceImage} />     
    </div>
  )
}

export default Steps
