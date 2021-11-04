import { Heading, Text, Flex, Link } from "@chakra-ui/react";

const Summary = () => {
  return (
    <Flex direction="column" mb="8">
      <Heading mb="4">About this website</Heading>
      <Text mb="8">Howdy, Im Sean.</Text>
      <Text mb="8">
        During Fall semester of 2021, I created this website as a project for my
        Geology class GEOL-201l at CSU Fullerton. This class was a single unit
        class that consisted mostly of undergrad Computer Science students that
        needed science elective credits. Wayne Henderson, the very rad professor
        of our class, wanted to tie in Geology with Computer Science so he had
        the great idea of creating websites for our projects.
      </Text>
      <Text mb="8">
        My goal for this website was to create a professional looking blog-like
        site but for learning about Yellowstone National Park. Why Yellowstone?
        It was a topic that came up a bunch in my other Geology class. I was
        fascinated with the fact that Yellowstone is a super volcano that
        erupted thousands of years ago, with a blast radius so insane that ash
        rained over California.
      </Text>
      <Text mb="8">
        Sidebar: our class actually went on a field trip to the Nopah Mountain
        Range and got to see some of this ash by Shoshone. The crazy part about
        the ash was that people built houses into them during the Great
        Depression. You can see some of these pictures below.
      </Text>
      <Text>
        All of my references for my articles can be found below. Additionally,
        you can find the tech stack I used for this project. ALSO you can find
        the{" "}
        <Link href="https://github.com/slimsloth" color="blue.200" isExternal>
          link for the GitHub source code repository for this website here.
        </Link>{" "}
        I hope that you have learned something reading through this site,
        whether it be geology related or computer science related.
      </Text>
    </Flex>
  );
};

export default Summary;
