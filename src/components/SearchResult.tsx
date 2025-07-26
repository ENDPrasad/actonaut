import { Box } from "@mui/material"
import CustomCard from "./CustomCard"
import {automationTopics} from '../assets/data/CardsData'
import type { AutomationTopic } from "../interfaces/interfaces"

function SearchResult() {

  return (
    <Box className='p-8'>
        <Box className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {automationTopics.map((data:AutomationTopic)=> <CustomCard cardDetails={data}/>)}
        </Box>
    </Box>
  )
}

export default SearchResult