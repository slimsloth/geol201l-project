import { Link, Button } from "@chakra-ui/react";
const RowButton = ({ buttonLink, buttonText }) => {
  return (
    <Link href={buttonLink} isExternal>
      <Button colorScheme="blue" w="xs">
        {buttonText}
      </Button>
    </Link>
  );
};

export default RowButton;
