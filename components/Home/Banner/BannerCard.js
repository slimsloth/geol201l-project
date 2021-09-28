import { Box, Image } from "@chakra-ui/react";

const BannerCard = ({ imageSrc }) => {
  return (
    <Box backgroundColor="#0b0d12" border="1px solid #26282c" w="23%" h="230px">
      <Image
        alt="activity"
        w="100%"
        h="100%"
        objectFit="cover"
        src={imageSrc}
      />
    </Box>
  );
};

export default BannerCard;
