import {Box, Text} from "@chakra-ui/react"
import { Props } from "framer-motion/types/types"

export default function Logo (...props: any) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
}