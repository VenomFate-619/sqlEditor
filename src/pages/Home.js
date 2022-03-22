import React , {useState} from "react";
import Editor from "../components/editor/Editor";
import { Box } from "@chakra-ui/react";
import Split from "react-split-it";

import "./styles.css";
import Result from "../components/result/Result";
import TableList from "../components/tablelist/TableList";
let id = 0;
const genName = (_) => `pane${id++}`;

const Home = () => {
    const [res, setRes] = useState([]);  
    const [panelSize, setPanelSize] = useState([
      { name: genName(), size: 0.7 },
      { name: genName(), size: 0.3 },
    ]);
    const handleSize = (sizes) =>
    {
        
        if (sizes[1] * 100 > 39 || sizes[1] * 100 < 29) return;
        console.log(sizes);
        let newSize = [...panelSize];
       newSize =  newSize.map((x,i) => {return {...x,size:sizes[i]}} )
        console.log("newSize ",newSize);
        setPanelSize(newSize);
    }
  return (
    <main>
      <Split
        gutterSize={0}
        sizes={panelSize.map((p) => p.size)}
        minSize={5}
        onSetSizes={handleSize}
      >
        <Split
          className="split-vertical"
          direction="vertical"
          gutterSize={0}
          size={[0.7, 0.3]}
        >
          {/* editor */}
          <Editor setRes={setRes} />
          {/* result */}
          <Box h="100%" borderTop="1px" borderColor={"gray.300"} position="absolute" left={0} right={0} textAlign="center" marginLeft={0} marginRight={0} >
            <Result res={res} />
          </Box>
        </Split>
        <Box
          height={"100%"}
          borderLeft="1px"
          borderColor={"gray.300"}
          backgroundColor="#fefcfe"
          width={"100%"}
          overflowX="auto"
        >
          <TableList />
        </Box>
      </Split>
    </main>
  );
};

export default Home;
