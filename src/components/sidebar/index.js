import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/ec2">
        EC2
      </a>

      <a className="menu-item" href="/lb">
        LB
      </a>

      <a className="menu-item" href="/s3">
        S3
      </a>

      <a className="menu-item" href="/ng">
        NG
      </a>

      <a className="menu-item" href="/sg">
        SG
      </a>

      <a className="menu-item" href="/ecs-cluster">
        ECS Cluster
      </a>

      <a className="menu-item" href="/lt">
        LT
      </a>
    </Menu>
  );
};
