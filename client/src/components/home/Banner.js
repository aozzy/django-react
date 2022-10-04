import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";

const items = [
  {
    key: "1",

    title: "Buy or sell properties",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed tincidunt leo. Pellentesque vitae velit sollicitudin, consectetur mauris tristique, rutrum tortor. Aenean et egestas libero, ac semper felis. Suspendisse eu fermentum urna, nec tincidunt nunc.",
  },
  {
    key: "2",

    title: "Buy or sell land",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed tincidunt leo. Pellentesque vitae velit sollicitudin, consectetur mauris tristique, rutrum tortor. Aenean et egestas libero, ac semper felis. Suspendisse eu fermentum urna, nec tincidunt nunc.",
  },
  {
    key: "3",

    title: "Buy or sell office space",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed tincidunt leo. Pellentesque vitae velit sollicitudin, consectetur mauris tristique, rutrum tortor. Aenean et egestas libero, ac semper felis. Suspendisse eu fermentum urna, nec tincidunt nunc.",
  },
];

const Banner = () => {
  return (
		<div id="banner" className="banner-section">
			<Carousel>
				{items.map((item) => {
					return (
						<div key={item.key} className="fluid-container">
							<div className="content">
								<h3>{item.title}</h3>
								<p>{item.content}</p>
								<div className="btn-group">
									<Button type="primary" size="large">
										Learn More
									</Button>
									<Button
										icon={<SearchOutlined />}
										size="large"
									>
										Search
									</Button>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Banner;
