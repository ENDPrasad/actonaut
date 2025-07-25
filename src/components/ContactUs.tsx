import { Button } from "@mui/material"
import { PRIMARY_BG_COLOR, PRIMARY_COLOR } from "../helper/contants"
import CustomInput from "./smallComponents/CustomInput"
import CustomTextArea from "./smallComponents/CustomTextArea"
import SubHeader from "./smallComponents/SubHeader"

function ContactUs() {

  return (
    <div id="contact-us" style={{backgroundColor: PRIMARY_COLOR, color: PRIMARY_BG_COLOR}} className="p-8">
                <SubHeader text="Share. Suggest. Shape."/>
        <div className="flex px-8 md:px-32 py-12 gap-4">
            <div className="flex-1 flex flex-col gap-2">
                <p className="text-sm">Whether it's a broken flow, a cool suggestion, or your favorite interview challenge — we're all ears.</p>
            </div>
            <div className="flex-1 flex flex-col px-4 gap-4">
                <div>
                    <CustomInput label="Name"/>
                </div>
                <div>
                    <CustomInput label="Email" type="Email"/>
                </div>
                <div>
                    <CustomTextArea />
                </div>
                <div className="flex justify-start">
                    <Button variant={"contained"} sx={{bgcolor: `${PRIMARY_COLOR}`, borderRadius: '10000px', padding: '0.6rem 1.2rem', border: `2px solid ${PRIMARY_BG_COLOR}`, color:`${PRIMARY_BG_COLOR}`, textTransform: 'none'}} >
        Send Message
    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
