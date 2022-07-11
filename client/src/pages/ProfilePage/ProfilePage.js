import React, { memo } from "react";
import { MainLayout } from "../../layouts";
import { Section } from "../../components";
import { Map, House } from "@mui/icons-material";
import { colors } from "../../colors";

const ProfilePage = memo((props) => {
  return (
    <MainLayout>
      <Section
        inputColor={colors.violetred}
        eyebrow="Save your favourite tranist routes here"
        header="Transit Profile"
        links={[
          {
            icon: <House />,
            text: "Home",
            url: "../",
          },
          {
            icon: <Map />,
            text: "Transit Maps",
            url: "../map",
          },
        ]}
      />
      ;
    </MainLayout>
  );
});

ProfilePage.displayName = "ProfilePage";

export { ProfilePage };
