import { Box } from '@chakra-ui/react'
import React from 'react'

import { Table, Thead, Tbody, Tr, Th, Td ,Text,Divider } from "@chakra-ui/react";
import Cancel from '../svg/cancel';

const TableContent = ({ data, setOpen }) => {
  return (
    <Box p={4} pt={0} overflowY="auto" flex={1}>
      {/* title */}
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        p={2}
        background="white"
        position={"sticky"}
        top="0px"
      >
        <Text casing="capitalize">{data.name}</Text>
        <Text cursor={"pointer"} onClick={() => setOpen(false)}>
          <Cancel />
        </Text>
      </Box>
      <Divider />
      {/* table */}
      <Table size={"sm"} variant="striped">
        <Thead>
          <Tr>
            <Th>Field</Th>
            <Th>Data type</Th>
            <Th>Is Null</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.attributes.map((x, i) => {
            return (
              <Tr key={i}>
                <Td>{x.name}</Td>
                <Td>{x.type}</Td>
                <Td>{x.hasOwnProperty("value") ? "No" :"Yes"}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableContent