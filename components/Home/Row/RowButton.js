import { Link, Button } from "@chakra-ui/react";
const RowButton = ({ buttonLink, buttonText, external }) => {
  return (
    <Link href={buttonLink} isExternal={external}>
      <Button colorScheme="blue" w="xs">
        {buttonText}
      </Button>
    </Link>
  );
};

export default RowButton;
