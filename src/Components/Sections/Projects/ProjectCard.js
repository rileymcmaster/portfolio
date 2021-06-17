import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useMediaQuery from "../../Utils/useMediaQuery";

const ProjectCard = () => {
  // breakpoint is 850px
  let mediaQuery = useMediaQuery();

  return (
    <Container>
      {/* //   LEFT */}
      <StyledLink to={"/project/foodfeed"}>
        <EachProject
          className={mediaQuery ? "media-query" : "left"}
          style={{ marginTop: "40px" }}
        >
          <div>
            <img
              className="right"
              src="https://res.cloudinary.com/bodyofwater/image/upload/v1620078432/FFstill1_pv6jam.jpg"
              alt="Food Feed thumbnail"
            />
          </div>
          <TextCard className="left">
            <h3>Food Feed</h3>
            <p>
              A social networking site where users can easily edit any part of a
              recipe and save it as their own. The best way to share meals with
              friends for now.
            </p>
          </TextCard>
        </EachProject>
      </StyledLink>
      {/* // END LEFT */}
      {/* // */}
      {/* // RIGHT */}
      <StyledLink to="/project/cyborg">
        <EachProject className={mediaQuery ? "media-query" : "right"}>
          <img
            className={mediaQuery ? "" : "right"}
            src="https://res.cloudinary.com/bodyofwater/image/upload/v1620151131/CyborgStill1_ytbdw3.jpg"
            alt="Food Feed thumbnail"
          />
          <TextCard className={mediaQuery ? "" : "right"}>
            <h3>Cyborg Social Club</h3>
            <p>
              A collaborative project: an e-commerce store of wearable
              technologies. Working in an Agile team, we produced a
              fully-functional and intuitive web-store.
            </p>
          </TextCard>
        </EachProject>
      </StyledLink>
      {/* // END RIGHT */}
    </Container>
  );
};
const Container = styled.div`
  max-width: 1000px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const EachProject = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 200px;
  max-width: 700px;
  color: white;
  border-radius: 5px;
  background-color: var(--third-color);
  box-shadow: 0 0 0 4px var(--primary-color), 0 0 0 8px var(--third-color);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  color: var(--primary-color);
  &.media-query {
    flex-direction: column;
    height: auto;
    max-width: 350px;
    margin-bottom: 2rem;
  }
  &.left {
    margin-right: auto;
    flex-direction: row;
    padding-left: 40px;
    padding-right: 10px;
  }
  &.right {
    margin-left: auto;
    flex-direction: row-reverse;
    padding-right: 40px;
    padding-left: 10px;
  }
  img {
    height: 350px;
    margin-top: 40px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }
  transition: all 0.2s linear;
  :hover:not(:active),
  :focus {
    outline: none;
    cursor: pointer;
    box-shadow: 0 0 0 8px var(--primary-color), 0 0 0 16px white;
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.02);
    text-shadow: none;
  }
  :active {
    transition: all 0.1s ease-out;
    background-color: var(--secondary-color);
    transform: scale(1);
    box-shadow: 0 0 0 10px var(--primary-color),
      0 0 0 20px var(--secondary-color);
  }
`;

const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  h3 {
    font-size: 1.6rem;
    margin-bottom: 1.1rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.2;
  }
  &.left {
    align-items: flex-start;
    p {
      text-align: left;
    }
  }
  &.right {
    align-items: flex-end;
    p {
      text-align: right;
    }
  }
  p.show-more {
    margin: auto 0 0 auto;
  }
`;
export default ProjectCard;