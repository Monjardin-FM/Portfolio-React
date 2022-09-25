import React from "react";
import { Background } from "../components/Background/background";
import { Container } from "../components/Container/Container";
import { ProfilePhoto } from "../components/Profile-Photo/profile-photo";
import { Clock } from "../components/Clock/Clock";
import { Nav } from "../components/Nav/Nav";

export const Home = () => {
  return (
    <div>
      <Background />
      <div className="w-screen h-screen flex justify-center items-center">
        <Container>
          <ProfilePhoto />
          <Clock />
        </Container>
      </div>
      <Nav />
    </div>
  );
};
