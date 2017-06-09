// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableBody,
  TableItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="primary">
            GitHub
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            for designers
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Git ≠ GitHub</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Git</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">An open source program for tracking changes in text files.</Text>
          <Text textAlign="left" size={6} textColor="secondary">Alternatives to Git include SVN, CVS and Mercurial.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">GitHub</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">A social user interface built on top of Git. It provides a web interface and a desktop client.</Text>
          <Text textAlign="left" size={6} textColor="secondary">Alternatives to GitHub include BitBucket, SourceTree and Tortoise.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Repositories</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Repository</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Think of it as a project folder containing all your files and most importantly, their version history.</Text>
          <Text textAlign="left" size={6} textColor="secondary">A repository can have multiple collaborators.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
