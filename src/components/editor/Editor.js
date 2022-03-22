import React, { useState } from "react";
import AceEditor from "react-ace";
import { Select, Text, Box, Button, Checkbox ,Stack } from "@chakra-ui/react";
import Play from "../svg/play";
import "ace-builds/src-noconflict/mode-mysql";
// theme
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import data from "../../mockdata"

const query = "SELECT * FROM Customers";
let sizes = [16, 18, 20, 22];
let themes = ["cobalt", "clouds_midnight", "github", "monokai"];

const Editor = ({setRes}) => {
  const [code, setCode] = useState(query);
  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = useState("cobalt");
  

  const handleClick = () => { 
    console.log(code);
    if (code.toLocaleLowerCase() === query.toLocaleLowerCase()) {
      setRes(data.results)
    }
    else{
       setRes([]);
    }
     
    }
  
    

  return (
    <Box display="flex" flexDirection={"column"} h="100%">
      <Box
        display="flex"
        alignItems={"center"}
        p="0.5rem"
        justifyContent="space-between"
      >
        <Box mr="0.5rem" display="flex" alignItems="center">
          <Text fontSize="md" mr="0.5rem" w="130px">
            Font size
          </Text>
          <Select
            variant="outline"
            onChange={(e) => setFontSize(Number(e.target.value))}
            defaultValue={16}
            size="sm"
          >
            {sizes.map((x, index) => (
              <option value={x} key={index}>
                {x}
              </option>
            ))}
          </Select>
        </Box>

        <Box display="flex" alignItems="center">
          <Text size="md" mr="0.5rem">
            Theme
          </Text>
          <Select
            variant="outline"
            onChange={(e)=>  setTheme(e.target.value) }
            defaultValue="cobalt"
            size="sm"
          >
            {themes.map((x, index) => (
              <option value={x} key={index}>
                {x}
              </option>
            ))}
          </Select>
        </Box>
        <Stack direction="row" spacing={6}>
          <Button
            leftIcon={<Play />}
            colorScheme="whatsapp"
            variant="solid"
            // size={"md"}
            padding="0 0.5rem"
            onClick={handleClick}
          >
            Run
          </Button>
          <Checkbox defaultChecked>Limit to 100 Rows</Checkbox>
        </Stack>
      </Box>

      <AceEditor
        style={{
          flex: 1,
          //   maxHeight: "250px",
        }}
        height="0"
        width="100%"
        focus={true}
        mode="mysql"
        name="editor"
        theme={theme}
        placeholder="Start Coding"
        onChange={(currentCode) => setCode(currentCode)}
        fontSize={fontSize}
        highlightActiveLine={true}
        value={code}
      />
    </Box>
  );
};

export default Editor;
