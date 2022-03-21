import React ,{useState} from 'react'
import { Text, Box,  Stack  } from "@chakra-ui/react";
import TableContent from '../tableContent/TableContent';

let tables = [
  {
    name: "employees",
    attributes: [
      { name: "EmployeeID", type: "INTEGER" },
      { name: "LastName", type: "TEXT" },
      { name: "FirstName", type: "TEXT" },
      { name: "Title", type: "TEXT" },
      { name: "TitleOfCourtesy", type: "TEXT" },
    ],
  },
  {
    name: "customers",
    attributes: [
      { name: "Customer ID", type: "TEXT" },
      { name: "CompanyName", type: "TEXT" },
      { name: "ContactName", type: "TEXT" },
      { name: "Address", type: "TEXT" },
      { name: "City", type: "TEXT" },
      { name: "Region", type: "TEXT" },
      { name: "PostalCode", type: "TEXT" },
      { name: "Country", type: "TEXT" },
      { name: "Phone", type: "TEXT" },
      { name: "Fax", type: "TEXT" },
    ],
  },
  {
    name: "orders",
    attributes: [
      { name: "OrderID", type: "INTEGER" },
      { name: "CustomerID", type: "TEXT" },
      { name: "OrderDate", type: "DATETIME" },
    ],
  },
  {
    name: "order-details",
    attributes: [
      { name: "OrderID", type: "INTEGER" },
      { name: "ProductID", type: "INTEGER" },
    ],
  },
  {
    name: "Products",
    attributes: [
      { name: "ProductID", type: "INTEGER" },
      { name: "ProductName", type: "TEXT" },
      { name: "SupplierID", type: "INTEGER" },
    ],
  },
  {
    name: "Territories",
    attributes: [
      { name: "TerritoryID", type: "TEXT" },
      { name: "TerritoryDescription", type: "TEXT" },
      { name: "RegionID", type: "INTEGER" },
    ],
  },
  {
    name: "Territories",
    attributes: [
      { name: "TerritoryID", type: "TEXT" },
      { name: "TerritoryDescription", type: "TEXT" },
      { name: "RegionID", type: "INTEGER" },
    ],
  },
  {
    name: "Territories",
    attributes: [
      { name: "TerritoryID", type: "TEXT" },
      { name: "TerritoryDescription", type: "TEXT" },
      { name: "RegionID", type: "INTEGER" },
    ],
  },
  {
    name: "Territories",
    attributes: [
      { name: "TerritoryID", type: "TEXT" },
      { name: "TerritoryDescription", type: "TEXT" },
      { name: "RegionID", type: "INTEGER" },
    ],
  },
  {
    name: "Territories",
    attributes: [
      { name: "TerritoryID", type: "TEXT" },
      { name: "TerritoryDescription", type: "TEXT" },
      { name: "RegionID", type: "INTEGER" },
    ],
  },
  {
    name: "Territories",
    attributes: [
      { name: "TerritoryID", type: "TEXT" },
      { name: "TerritoryDescription", type: "TEXT" },
      { name: "RegionID", type: "INTEGER" },
    ],
  },
];


const TableList = () => {
    const [selected, setSelected] = useState(0)
    const [open, setOpen] = useState(true);
    const handleSelect = (i)=>{
        if(!open) setOpen(true)
        setSelected(i);
    }
  return (
    <Box height="100vh"  display={"flex"} flexDirection="column" >
      <Text textAlign={"center"} fontSize="2xl" fontWeight={"light"}>
        Tables
      </Text>
      <Stack p={4}  overflowY="auto" flex={1}  >
        {tables.map((x, i) => (
          <Text
            key={i}
            casing="capitalize"
            _hover={{ background: "gray.100" }}
            p="4px"
            cursor={"pointer"}
            onClick={() => handleSelect(i)}
          >
            # {x.name}
          </Text>
        ))}
      </Stack>
      {open && <TableContent data={tables[selected]} setOpen={setOpen} />}
    </Box>
  );
}

export default TableList