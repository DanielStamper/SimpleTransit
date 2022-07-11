import React, { memo } from "react";
import { MainLayout } from "../../layouts";
import { Section } from "../../components";
import { Map, AcUnit, Star } from "@mui/icons-material";
import { colors } from "../../colors";

const HomePage = memo((props) => {
  return (
    <MainLayout>
      <Section
        eyebrow={{
          textContent: "Welcome",
          textSize: "1em",
          textColor: colors.white,
        }}
        header="Simple Transit App"
        links={[
          { icon: <AcUnit />, text: "Test 1", url: "test" },
          {
            icon: <Star />,
            text: "Test 2",
            url: "test2",
          },
          {
            icon: <Map />,
            text: "Transit Maps",
            url: "map",
          },
        ]}
      />
      ;
    </MainLayout>
  );
});

HomePage.displayName = "HomePage";

export { HomePage };
