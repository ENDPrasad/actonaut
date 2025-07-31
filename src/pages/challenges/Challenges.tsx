import { Box } from "@mui/material";
import HeaderText from "../../components/smallComponents/HeaderText";
import { PRIMARY_COLOR } from "../../helper/contants";


function Challenges() {
  return (
    <>
      <Box className="flex flex-col w-full">
        <Box
          component={"header"}
          className="py-8 flex flex-col align-middle justify-center text-center gap-4"
        >
          <HeaderText
            text="⚔️ Real-World Challenges to Sharpen Your Automation Skills ⚔️"
            color={PRIMARY_COLOR}
          />
          <div className="px-16 lg:px-56">
            <span>
              Put your knowledge to the test with our curated set of real-world automation challenges. Designed for both beginners and experienced testers, these scenarios mirror common industry use cases and interview-level problems.
            </span>
          </div>
        </Box>
        <div className="text-center p-30">
            Coming Soon...
        </div>
      </Box>
    </>
  );
}

export default Challenges;
