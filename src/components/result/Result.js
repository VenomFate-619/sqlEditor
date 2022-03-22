import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text
} from "@chakra-ui/react";

const attr = [
  "id",
  "companyName",
  "contactName",
  "contactTitle",
  "address",
  "city",
  "region",
  "postalCode",
  "country",
  "phone",
];

const Result = ({res}) => {
  if (res.length === 0) {
    return <Text textAlign={"center"} fontSize="4xl" >No results</Text>
  }
  return (
    <Table variant="striped" colorScheme={"gray"} overflow="scroll" size="sm" >
      <Thead  position={"sticky"} top={0} backgroundColor="white" >
        <Tr>
         { attr.map((x,i) => <Th key={i}  textTransform="none" >{x}</Th>) }
        </Tr>
      </Thead>
      <Tbody>
     {res.map((x,i) =>  (
        <Tr key={i}>
         {attr.map((y,j) => 
           <Td  key={j} >{x[y]}</Td>
         )}
        </Tr>
     )  )}
      
      </Tbody>
    </Table>
  );
}

export default Result