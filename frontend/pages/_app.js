import App, { Container } from "next/app";

export default class myApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Component />
      </Container>
    );
  }
}
