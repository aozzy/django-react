import React from "react";

import { Button, Collapse } from "antd";

const { Panel } = Collapse;
function Faqs() {
  return (
    <div id="faq" className="block faq-block">
      <div className="fluid-container">
        <div className="title-section">
          <h2>Frequently Asked Questions</h2>
          <p>Ask Questions here</p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="How do I find the right property?">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed tincidunt leo. Pellentesque vitae velit
              sollicitudin, consectetur mauris tristique, rutrum tortor.
            </p>
          </Panel>
          <Panel header="How do I know I can trust your agents?">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed tincidunt leo. Pellentesque vitae velit
              sollicitudin, consectetur mauris tristique, rutrum tortor.
            </p>
          </Panel>
          <Panel header="Who are your major clients?">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed tincidunt leo. Pellentesque vitae velit
              sollicitudin, consectetur mauris tristique, rutrum tortor.
            </p>
          </Panel>
          <Panel header="How do I get in touch?">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed tincidunt leo. Pellentesque vitae velit
              sollicitudin, consectetur mauris tristique, rutrum tortor.
            </p>
          </Panel>
          <Panel header="Do I need to create an account?">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed tincidunt leo. Pellentesque vitae velit
              sollicitudin, consectetur mauris tristique, rutrum tortor.
            </p>
          </Panel>
        </Collapse>
        <div className="quick-support">
          <h3>Want expedited support</h3>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed tincidunt leo. Pellentesque vitae velit
              sollicitudin, consectetur mauris tristique, rutrum tortor.
            </p>
           <Button type="primary" size="large">
            <i className="fas fa-envelope"></i>
            Email your question!
           </Button>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
