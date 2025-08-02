import { Typography } from "@mui/material"
import StepCount from "./StepCount"

interface IStep {
  step: string,
  image: string,
  heading: string,
  description: string,
  altText: string,
  reverse?: boolean
}

function Step({step, image, heading, description, altText, reverse=false}: IStep) {

  return (
    <div className={`flex ${reverse && 'flex-row-reverse'} justify-between`}>
    <div className={`flex gap-6`}>
              <StepCount step={step}/>
              <div className="flex flex-col gap-1">
                <Typography sx={{fontWeight:'600', fontSize: '1.5rem'}}>{heading}</Typography>
                <p className="text-sm">{description}</p>
              </div>
            </div>
            <div className="flex justify-center"><img className="w-7/12" src={image} alt={altText} /></div>
            </div>
  )
}

export default Step
