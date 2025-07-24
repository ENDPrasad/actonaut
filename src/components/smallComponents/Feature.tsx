import theme from "../../../theme"

interface IFeature {
    image: string,
    altText: string,
    description: string,
}


function Feature({image, altText, description}: IFeature) {
    const textColor = theme.palette.background.default

  return (
<div className="flex-1 flex flex-col justify-start gap-4 align-middle">
                    <div className="flex justify-center align-top">
                        <img width={'120px'} src={image} alt={altText} />
                    </div>
                <p className="text-center text-sm lg:mx-16" style={{color: textColor}}>{description}</p>
                </div>
  )
}

export default Feature
