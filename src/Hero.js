import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ballOne from "./images/golfballX.svg";

class Hero extends Component {
  render() {
    const Section = styled.section`
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      max-height: 100%;
      background: #4fa746;
      /* height: 800px;

display: flex;
justify-content: center;
align-items: center;
background: green; */
    `;

    const Container = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 1000px;
      padding: 2rem calc((1000vw-1300px) / 2);
      @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    `;

    const ColumnLeft = styled.div`
      display: flex;
      color: #fff;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 2rem 2rem;

      h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
      }

      p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
      }
    `;

    const Button = styled(motion.button)`
      padding: 1rem 3rem;
      font-size: 1rem;
      border: 2px solid #fff;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      background: transparent;
      color: #fff;
    `;

    const Image = styled(motion.img)`
      position: absolute;
      width: 100%;
      height: 100%;
      max-width: 250px;
      max-height: 250px;
    `;

    const ColumnRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* padding: 2rem;  */
position: relative; 

${Image}:nth-child(1) {
justify-content: center;
}
 
`;

    const fadeLeft = {
      hidden: { opacity: 0, x: -100 },
      visable: { opacity: 1, x: 0 }
    };
    return (
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {" "}
              Improve your game.
            </motion.h1>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visable"
              transition={{ duration: 1 }}
            >
              Pocket Caddy
            </motion.p>
            <Button
              onClick={this.props.onButtonClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#F6C13E",

                color: "rgb(0, 255, 255)"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              Enter
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={ballOne}
              alt="golfball"
              width="150"
              height="150"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 20, right: 40, top: 0, bottom: 0 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />

          </ColumnRight>
        </Container>
      </Section>
    );
  }
}

export default Hero;
