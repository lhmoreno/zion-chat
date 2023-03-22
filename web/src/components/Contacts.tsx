import { Box, Heading, Text } from "@chakra-ui/react";
import dayjs from 'dayjs'
import { handleDiferrenceDates } from "../lib/dayjs";

type Contact = {
  id: string
  name: string
  lastMessage: {
    created_at: string
    type: 'sent' | 'received'
    text: string
  }
  unreadMessagesAmount?: number
}

const contacts: Contact[] = [
  { 
    id: '1', 
    name: 'Johh Doe', 
    lastMessage: {
      created_at: '2023-03-22T19:31:14.572Z',
      type: 'received',
      text: 'Cara te vi ontem mané'
    }, 
    unreadMessagesAmount: 1 
  },
  { 
    id: '2', 
    name: 'Johh Doe 2', 
    lastMessage: {
      created_at: '2023-03-21T19:31:14.572Z',
      type: 'sent',
      text: 'Feijoada é bom de maaaaaaaais, se eu pudesse comeria todos os dias'
    }, 
    unreadMessagesAmount: 3 
  },
  { 
    id: '3', 
    name: 'Johh Doe 3', 
    lastMessage: {
      created_at: '2023-03-17T19:31:14.572Z',
      type: 'received',
      text: 'Feijoada é bom de maaaaaaaais, se eu pudesse comeria todos os dias'
    }
  },
  { 
    id: '4', 
    name: 'Johh Doe 4', 
    lastMessage: {
      created_at: '2021-02-14T19:31:14.572Z',
      type: 'sent',
      text: 'E ae beterrabu!!!'
    }
  }
]

export default function Contacts() {
  return (
    <Box bgColor="whiteAlpha.50" roundedLeft="2xl">
      <Box bgColor="gray.600" p="1rem" mb="1rem">
        <Heading size="md">{'<3'} Zion Chat</Heading>
      </Box>

      <Box display="flex" flexDirection="column">
        {contacts.map(contact => {
          return (
            <Box 
              key={contact.id}
              as="button"
              cursor="pointer"
              py="0.5rem"
              px="1rem"
              _hover={{
                bgColor: 'whiteAlpha.100'
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Heading fontSize="lg" fontWeight="medium">
                  {contact.name}
                </Heading>
                <Text fontSize="xs" color="whiteAlpha.600">
                  {handleDiferrenceDates(contact.lastMessage.created_at)}
                </Text>
              </Box>
              <Box h="1.5rem" display="flex" justifyContent="space-between" alignItems="center" gap={1}>
                <Text fontSize="xs" color="whiteAlpha.600" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {contact.lastMessage.text}
                </Text>
                {contact.unreadMessagesAmount && 
                  <Box
                    as="span"
                    bgColor="blue.500"
                    h="1.2rem"
                    minW="1.2rem"
                    rounded="full"
                    fontSize="sm"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {contact.unreadMessagesAmount}
                  </Box>
                }
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}