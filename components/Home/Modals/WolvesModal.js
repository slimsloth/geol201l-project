import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WolvesModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="#0a0b0f" fontSize={["lg", "xl"]} color="white">
        <ModalHeader>Gray Wolves</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Box>
                <Image
                  alt="hi"
                  src="./img/gray_wolves/brianna-r-hOGzDomlbIY-unsplash.jpg"
                  objectFit="scale-down"
                  w="100%"
                  h="md"
                />
                <Text
                  textAlign="center"
                  fontSize="sm"
                  color="gray.300"
                  mb="8"
                  mt="2"
                >
                  Photo credit: Unsplash - Brianna R
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/gray_wolves/eva-blue-e9hbo4NtKJ0-unsplash.jpg"
                objectFit="scale-down"
                w="100%"
                h="md"
              />
              <Text
                textAlign="center"
                fontSize="sm"
                color="gray.300"
                mb="8"
                mt="2"
              >
                Photo credit: Unsplash - Eva Blue
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/gray_wolves/m-l-ghtTSfjSBoE-unsplash.jpg"
                objectFit="scale-down"
                w="100%"
                h="md"
              />
              <Text
                textAlign="center"
                fontSize="sm"
                color="gray.300"
                mb="8"
                mt="2"
              >
                Photo credit: Unsplash - M L
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/gray_wolves/yannick-menard-rRgUtMpM1uw-unsplash.jpg"
                objectFit="scale-down"
                w="100%"
                h="md"
              />
              <Text
                textAlign="center"
                fontSize="sm"
                color="gray.300"
                mb="8"
                mt="2"
              >
                Photo credit: Unsplash - Yannick Menard
              </Text>
            </SwiperSlide>
          </Swiper>
          <Text mb="4">
            Gray wolves were announced as an endangered species in 1973 due to
            extermination programs and loss of habitat. They were reintroduced
            to the park in 1995. Gray wolves are highly social animals, and pack
            oriented. They often work together as a team to deffend territory,
            hunt any prey, or to protect their offspring. Gray wolves primarily
            hunt elk and deer, on rarer occassions they may attack bison if they
            are young or vulnerable.
          </Text>
          <Text mb="4">
            Currently, the leading cause of death within the park is from other
            gray wolves. This is usually over territory disputes, or even
            competing over carcasses for food. Outside of the park, the leading
            cause of death is from humans, usually from hunting. There has never
            been a recorded incident where a gray wolf has attacked a human
            inside the park.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            bgColor="#0074e0"
            colorScheme="blue"
            onClick={onClose}
            isFullWidth
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WolvesModal;
