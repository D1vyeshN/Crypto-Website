import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../img.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY:"20px"
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse",
      }}>
      <Image w={"full"} h={"full"} zIndex={"base"} filter={"grayscale(0.82)"} objectFit={"contain"} src={img}/>
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"medium"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Cryptopedia
      </Text>
    </Box>
  );
};

export default Home;
