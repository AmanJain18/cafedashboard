import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import {logo, yariga} from "assets"

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="VCafe" width="28px" />
        ) : (
          <img src={yariga} alt="VCafe" width="140px" />
        )}
      </Link>
    </Button>
  );
};
