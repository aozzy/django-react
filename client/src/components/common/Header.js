import React, { useState } from "react";
import { Anchor, Button, Drawer } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const [isVisible, SetIsVisible] = useState(false);
  const showDrawer = () => {
    SetIsVisible(true);
  };
  const hideDrawer = () => {
    SetIsVisible(false);
  };
  return (
    <React.Fragment>
      <div className="fluid-container">
        <div className="header">
          <div className="logo">
            <i className="fas fa-home fa-2x"></i>
            <Link to="/">My Place</Link>
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset="65">
              <Anchor.Link href="#banner" title="Home" />
              <Anchor.Link href="#about" title="About" />
              <Anchor.Link href="#options" title="Options" />
              <Anchor.Link href="#faq" title="FAQ" />
              <Link to="/properties" className="ant-anchor-link-title">
                Properties
              </Link>
            </Anchor>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"> </i>
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={hideDrawer}
              // visible={visible}
            >
              <Anchor targetOffset="65">
              <Anchor.Link href="#banner" title="Home" />
              <Anchor.Link href="#about" title="About" />
              <Anchor.Link href="#options" title="Options" />
              <Anchor.Link href="#faq" title="FAQ" />
              <Link to="/properties" className="ant-anchor-link-title">
                Properties
              </Link>
            </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
