import React from "react";
import { Col, Row } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-search-location"></i>,
    title: "Simplified Search",
    content:
      "It is a long established fact that a reader will be distracted by the readable content",
  },
  {
    key: "2",
    icon: <i className="fas fa-database"></i>,
    title: "Simplified Search",
    content:
      "It is a long established fact that a reader will be distracted by the readable content",
  },
  {
    key: "3",
    icon: <i className="fas fa-globe-africa"></i>,
    title: "Simplified Search",
    content:
      "It is a long established fact that a reader will be distracted by the readable content",
  },
];
const About = () => {
  return (
    <div id="about" className="block about-section">
      <div className="fluid-container">
        <div className="title-section">
          <h2>about us</h2>
          <p>Learning Django</p>
        </div>
        <div className="content-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed tincidunt leo. Pellentesque vitae velit
            sollicitudin, consectetur mauris tristique, rutrum tortor. Aenean et
            egestas libero, ac semper felis. Suspendisse eu fermentum urna, nec
            tincidunt nunc. Sed interdum tellus nec convallis pellentesque.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.id}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default About;
