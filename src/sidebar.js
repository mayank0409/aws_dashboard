// sidebar.js

import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/ec2">
        EC2
      </a>

      <a className="menu-item" href="/elb">
        ELB
      </a>

      <a className="menu-item" href="/s3">
        S3
      </a>
    </Menu>
  );
};
