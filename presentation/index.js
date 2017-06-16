// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
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
  secondary: "Didot"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="primary">
            Git(Hub)
          </Heading>
          <Text italic textFont="secondary" margin="10px 0 0" textColor="tertiary" size={1}>
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
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Repository (repo)</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Think of it as a project folder containing all your files and most importantly, their version history.</Text>
          <Text textAlign="left" size={6} textColor="secondary">A repository can have multiple collaborators.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Remote repo</Text>
          <Text textAlign="left" size={6} textColor="secondary">The version of your files hosted on a remote server, eg. GitHub.com.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Local repo (clone)</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">A copy of a remote repo stored localy on your computer.</Text>
          <Text textAlign="left" size={6} textColor="secondary">You edit the files in your local repo. As it is connected to the remote version, you can keep the two in sync.</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Branches</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Master</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Master branch is the primary branch each repo is initiated with. This is your "live" version.</Text>
          <Text textAlign="left" size={6} textColor="secondary">Every repo has at least one branch – the master branch.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={require("../assets/simple-repo.png")}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Branch</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">A parallel version of a repo. It is contained within the repo, but it does not affect the master branch.</Text>
          <Text textAlign="left" size={6} textColor="secondary">You can create any number of branches, make changes in them and merge them into the master once you are ready to publish your changes.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={require("../assets/branch.png")}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Fork</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">A personal copy of another users repository. Forks are connected to the orignal repo, but are not contained within it.</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">You can make changes to your fork and submit a pull request to the original author to have your changes included.</Text>
          <Text textAlign="left" size={6} textColor="secondary">You can also keep your fork up to date by pulling updates from the original.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={require("../assets/fork.png")}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Actions</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Clone</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Make a local copy of a remote repo.</Text>
          <Text textAlign="left" size={6} textColor="secondary"><Code>git clone [repo-name]</Code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Create a branch</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Create a local branch, and switch to it so you can make changes.</Text>
          <Text textAlign="left" size={6} textColor="secondary"><Code>git checkout -b [branch-name]</Code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Stage your changes</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">After making changes, add them to 'staging' before you can commit them.</Text>
          <Text textAlign="left" size={6} textColor="secondary"><Code>git add [file(s)]</Code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Commit</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Commit staged changes to your local repo.</Text>
          <Text textAlign="left" size={6} textColor="secondary"><Code>git commit -m "change description"</Code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Fetch</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Fetch the latest changes from the remote repo, so you can review them alongside yours.</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">It is good practice to fetch before you try to merge your changes.</Text>
          <Text textAlign="left" size={6} textColor="secondary"><Code>git fetch [repo-name]</Code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Merge</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Once you have the remote changes on your computer, you can merge them with your changes.</Text>
          <Text textAlign="left" size={6} textColor="secondary"><Code>git merge [branch-name]</Code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Pull</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Pull is an alternative workflow to fetch and merge.</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">pull = fetch + merge</Text>
          <Text textAlign="left" size={6} textColor="secondary"><Code>git pull [branch-name]</Code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Push</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">Push your changes to the remote repo.</Text>
          <Text textAlign="left" size={6} textColor="secondary"><Code>git push origin [branch-name]</Code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" bold textAlign="left" size={6} textColor="secondary">Pull request</Text>
          <Text margin="0 0 40px 0" textAlign="left" size={6} textColor="secondary">When you open a pull request, you’re proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch.</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Getting started</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" textAlign="left" size={6} textColor="secondary">1. Create an account on GitHub.com</Text>
          <Text margin="0 0 20px 0" textAlign="left" size={6} textColor="secondary">2. Install Git</Text>
          <Text margin="0 0 20px 0" textAlign="left" size={6} textColor="secondary">3. Choose command line or desktop client</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Practical example</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="0 0 20px 0" textAlign="left" size={6} textColor="secondary">1. Set up a repo</Text>
          <Text margin="0 0 20px 0" textAlign="left" size={6} textColor="secondary">2. Make some changes</Text>
          <Text margin="0 0 20px 0" textAlign="left" size={6} textColor="secondary">3. Create a branch</Text>
          <Text margin="0 0 20px 0" textAlign="left" size={6} textColor="secondary">4. Create pull request</Text>
          <Text margin="0 0 20px 0" textAlign="left" size={6} textColor="secondary">5. Resolve conflicts</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Software development with git is hard. Without it, it's unimaginable.</Quote>
            <Cite italic textFont="secondary">Software developer</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
