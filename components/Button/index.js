import { Button } from "@chakra-ui/button"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { motion } from "framer-motion"

const CustomButton = ({ children }) => {
    const MotionButton = motion(Button)
    return(
        <MotionButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            rightIcon={<ArrowForwardIcon />}>
            {children}
        </MotionButton>
    )
}

export default CustomButton