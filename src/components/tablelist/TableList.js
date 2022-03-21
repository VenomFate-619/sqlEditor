import React ,{useState} from 'react'
import { Text, Box,  Stack  } from "@chakra-ui/react";
import TableContent from '../tableContent/TableContent';

let tables = [
  {
    name: "employees",
    attributes: [
      { name: "EmployeeID", type: "INTEGER" ,value:false},
      { name: "LastName", type: "TEXT" ,value:false},
      { name: "FirstName", type: "TEXT",value:false },
      { name: "Title", type: "TEXT" },
      { name: "TitleOfCourtesy", type: "TEXT" },
      { name: "BirthDate", type: "TEXT" },
      { name: "HireDate", type: "TEXT" },
      { name: "Address", type: "TEXT" },
      { name: "City", type: "TEXT" },
      { name: "Region", type: "TEXT" },
      { name: "PostalCode", type: "TEXT" },
      { name: "Country", type: "TEXT" },
      { name: "HomePhone", type: "TEXT" },
      { name: "Extension", type: "TEXT" },
      { name: "Notes", type: "TEXT" },
      { name: "ReportsTo", type: "INTEGER" },
    ],
  },
  {
    name: "customers",
    attributes: [
      { name: "Customer ID", type: "TEXT",value:false },
      { name: "CompanyName", type: "TEXT",value:false },
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
      { name: "OrderID", type: "INTEGER" ,value:false },
      { name: "CustomerID", type: "TEXT" },
      { name: "OrderDate", type: "DATETIME" },
      { name: "RequiredDate", type: "DATETIME" },
      { name: "ShippedDate", type: "DATETIME" },
      { name: "ShipVia", type: "INTEGER" },
      { name: "Freight", type: "REAL" },
      { name: "ShipName", type: "TEXT" },
      { name: "ShipAddress", type: "TEXT" },
      { name: "ShipCity", type: "TEXT" },
      { name: "ShipRegion", type: "TEXT" },
      { name: "ShipPostalCode", type: "TEXT" },
      { name: "ShipCountry", type: "TEXT" },
    ],
  },
  {
    name: "order-details",
    attributes: [
      { name: "OrderID", type: "INTEGER" },
      { name: "ProductID", type: "INTEGER" },
      { name: "UnitPrice", type: "INTEGER" },
      { name: "Quantity", type: "INTEGER" },
      { name: "Discount", type: "INTEGER" },
    ],
  },
  {
    name: "Products",
    attributes: [
      { name: "ProductID", type: "INTEGER" , value:false },
      { name: "ProductName", type: "TEXT" , value:false },
      { name: "SupplierID", type: "INTEGER" },
      { name: "CategoryID", type: "INTEGER"},
      { name: "QuantityPerUnit", type: "TEXT" },
      { name: "UnitPrice", type: "INTEGER" },
      { name: "UnitsInStock", type: "INTEGER" },
      { name: "UnitsOnOrder", type: "INTEGER" },
      { name: "ReorderLevel", type: "INTEGER" },
      { name: "Discontinued", type: "INTEGER" },
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
        if(!open) setOpen(true);
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