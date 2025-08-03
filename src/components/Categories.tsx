import { Box } from "@mui/material";
import HeaderText from "./smallComponents/HeaderText";
import {
  PRIMARY_COLOR,
} from "../helper/contants";
import SearchResult from "./SearchResult";
import { Link } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Categories() {
  return (
    <>
      <Box className="flex flex-col w-full">
        <div className="py-8 px-16">
          <Link to='/'>
          <ArrowBackIcon sx={{color: PRIMARY_COLOR}} />
        </Link>
        </div>
        <Box
          component={"header"}
          className="py-4 flex flex-col align-middle justify-center text-center gap-4"
        >
          <HeaderText
            text="What do you want to explore today?"
            color={PRIMARY_COLOR}
          />
          <div className="px-16 lg:px-56">
            <span>
              Explore real-world web elements and automation topics through
              hands-on scenarios. Each card leads you to interactive examples,
              test cases, and solutions to sharpen your automation skills.
            </span>
          </div>
        </Box>
        <div>
            <SearchResult />
        </div>
      </Box>
    </>
  );
}

export default Categories;
