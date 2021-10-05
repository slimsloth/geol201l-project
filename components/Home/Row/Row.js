import { Flex } from "@chakra-ui/react";
import RowCaption from "./RowCaption";
import RowHeader from "./RowHeader";
import RowButton from "./RowButton";

const Row = ({
  rowHeight,
  contentPosition,
  imageSource,
  children,
  caption,
  header,
  buttonLink,
  buttonText,
}) => {
  let gradient = "";
  let dir = "";
  switch (contentPosition) {
    case "left":
      gradient = "to left";
      dir = "row";
      break;
    case "center":
      gradient = "to top";
      dir = "column";
      break;
    case "right":
      gradient = "to right";
      dir = "row-reverse";
      break;
    default:
      gradient = "to bottom";
      break;
  }

  return (
    <Flex
      h={rowHeight}
      my="2px"
      w="100%"
      bgImage={`linear-gradient(${gradient}, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(${imageSource})`}
      bgPosition="center"
      backgroundSize="cover"
      bgRepeat="no-repeat"
      direction={dir}
      align="center"
      justify={["center", "flex-start"]}
      p="8"
    >
      <Flex direction="column" justify="center" align="center" p="4">
        <RowCaption caption={caption} />
        <RowHeader header={header} />
        <RowButton buttonLink={buttonLink} buttonText={buttonText} />
        {/* {children} */}
      </Flex>
    </Flex>
  );
};

export default Row;
