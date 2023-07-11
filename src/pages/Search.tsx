import Sidebar from "../components/Sidebar";
import Results from "../components/Results";
import { Flex } from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Search() {
  // searchbar in header (!!)

  // add logic to handle results filter
  // full page height background

  // sidebar should be fixed in position and take up at most the whole screen height
  // shrinking down the summary and infoButton section as required, up to a minimum height

  // results should scroll with the page

  // further improvement on result, sticky the filter/sortby header?
  const [hideSidebar, setHideSidebar] = useState(false);
  const location = useLocation();
  const searchInput = decodeURI(location.search).slice(3);

  return (
    <Flex backgroundColor="gray.50">
      <Sidebar
        searchInput={searchInput}
        toggleSidebar={{ hideSidebar, setHideSidebar }}
      />
      <Results
        searchInput={searchInput}
        toggleSidebar={{ hideSidebar, setHideSidebar }}
      />
    </Flex>
  );
}
