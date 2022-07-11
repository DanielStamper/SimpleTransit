import React, { memo } from "react";

import { MainLayout } from "../../layouts";
import { Section, MapWrapper } from "../../components";
import { colors } from "../../colors";
// import { Map } from "@mui/icons-material";

const MapPage = memo((props) => {
  return (
    <MainLayout>
      <Section
        inputColor={colors.palegreen}
        eyebrow="The map page is not working correctly"
        header="Maps"
        links={[]}
      />
      <MapWrapper />
    </MainLayout>
  );
});

MapPage.displayName = "MapPage";

export { MapPage };
