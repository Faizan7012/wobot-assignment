import React from 'react';
import {Box,Image} from "@chakra-ui/react";
import Form from '../Components/Form';

const Login = () => {
  return (
   <div id="container" >

   <Box position={"absolute"} top={8} left={20} >
   <Image src="https://app.wobot.ai/assets/images/wobot-logo.png" />
   </Box>

   <Form />

   <div id="slantDiv"></div>
  
   </div>
  )
}

export default Login