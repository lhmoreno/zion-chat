import { Box, Container } from "@chakra-ui/react"
import Chat from "./components/Chat"
import Contacts from "./components/Contacts"

function App() {
  return (
    <Box 
      my="1rem"
      mx="auto"
      minW="1024px"
      maxW="1536px"
      minHeight="calc(100vh - 2rem)"
      display="grid"
      gridTemplateColumns="300px 1fr"
      boxShadow="2xl"
      rounded="xl"
    >
      <Contacts />
      <Chat />
    </Box>
  )
}

export default App
