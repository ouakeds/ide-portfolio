import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const TextShpere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "Typescript",
        "JavaScript",
        "React",
        "Php",
        "Laravel",
        "Symfony",
        "Next",
        "NodeJS",
        "NestJS",
        "Wordpress",
        "Shopify",
        "Sql",
        "Mysql",
        "Git",
        "Github",
        "Docker",
        "Docker-Compose",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="text-shpere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextShpere;