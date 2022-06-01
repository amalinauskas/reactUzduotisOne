import React from "react";
import Article from "./components/Article/Article";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

const App = () => {
  return (
    <>
      <Hero title="New York" subtitle="Fond out everything about NY here!" />
      <Section>
        <Article title="Best bars in NY">
          <ul>
            <li>One Bar</li>
            <li>Two Bar</li>
            <li>Three Bar</li>
          </ul>
        </Article>
        <Article title="Things to do in NY">
          <p>You can do many things..</p>
          <Button
            type="button"
            handleClick={() =>
              window.location.replace("https://www.newyorker.com/")
            }
          >
            Button!!
          </Button>
        </Article>
      </Section>
    </>
  );
};

export default App;
