import React from "react";
import Article from "./components/Article/Article";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Card from "./components/Card/Card";
import CardDisplay from "./components/CardDisplay/CardDisplay";

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
      <CardDisplay>
        <Card
          image={
            "https://images.unsplash.com/photo-1654077230334-461a651df317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          text="Good times"
        ></Card>
        <Card
          image={
            "https://images.unsplash.com/photo-1654077230334-461a651df317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          text="Good times"
        ></Card>
        <Card
          image={
            "https://images.unsplash.com/photo-1654077230334-461a651df317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          text="Good times"
        ></Card>
        <Card
          image={
            "https://images.unsplash.com/photo-1654030752805-a31a2ef93fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          text="Best times"
        ></Card>
        <Card
          image={
            "https://images.unsplash.com/photo-1654030752805-a31a2ef93fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          text="Best times"
        ></Card>
        <Card
          image={
            "https://images.unsplash.com/photo-1654030752805-a31a2ef93fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          text="Best times"
        ></Card>
      </CardDisplay>
    </>
  );
};

export default App;
