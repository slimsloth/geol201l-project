import { Heading } from "@chakra-ui/react";
const RowHeader = ({ header }) => {
  return (
    <Heading fontSize="4xl" lineHeight="1.5" fontWeight="700">
      {header}
    </Heading>
  );
};

export default RowHeader;
