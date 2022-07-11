import React, { memo } from "react";
import { MainLayout } from "../../layouts";
import { Section } from "../../components";
import { colors } from "../../colors";

const NotFoundPage = memo((props) => {
  return (
    <MainLayout>
      <Section
        inputColor={colors.lightblue}
        eyebrow=""
        header="Page Not Found"
        links={[]}
      />
      ;
    </MainLayout>
  );
});

NotFoundPage.displayName = "NotFoundPage";

export { NotFoundPage };
