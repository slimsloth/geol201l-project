import { Flex, Image } from "@chakra-ui/react";
import CardCaption from "./CardCaption";
import CardHeader from "./CardHeader";
import CardText from "./CardText";

const Card = ({ imageSource, children, caption, header, text }) => {
  return (
    <Flex
      direction="column"
      h={["400px", "551px"]}
      w={["100%", "50%"]}
      border="1px solid #26282c"
      m={["0px", "2px"]}
      textAlign="center"
      _hover={{ borderColor: "#3182ce" }}
    >
      <Image
        alt="alt text"
        borderBottom="1px solid #2a2c30"
        src={imageSource}
        objectFit="cover"
        h={["50%", "65%"]}
      />
      <CardCaption caption={caption} />
      <CardHeader header={header} />
      <CardText text={text} />
      {children}
    </Flex>
  );
};

export default Card;
