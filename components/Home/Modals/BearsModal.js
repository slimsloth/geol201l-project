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

const BearsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="#0a0b0f" fontSize="xl" color="white">
        <ModalHeader>Black Bears</ModalHeader>
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
                  src="./img/black_bears/camerauthor-photos-Q041QL3f0A8-unsplash.jpg"
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
                  Photo credit: Unsplash - Cameraauthor Photos
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/black_bears/danika-perkinson-x1P45iTcnys-unsplash.jpg"
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
                Photo credit: Unsplash - Danika Perkinson
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/black_bears/jack-charles-swcWpfjks1E-unsplash.jpg"
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
                Photo credit: Unsplash - Jack Charles
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="hi"
                src="./img/black_bears/stephanie-leblanc-55PvjmSfYAQ-unsplash.jpg"
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
                Photo credit: Unsplash - Stephanie Leblanc
              </Text>
            </SwiperSlide>
          </Swiper>
          <Text mb="4">
            Black bears are commonly found in the park, and often coexist with
            grizzly bears. The male black bears weigh around 210 - 315 lbs,
            while the females weigh around 135 - 200 lbs. Compared to a bison,
            bears are relatively small. Bears diets consist of insects, rodents,
            elk, trout and vegetation. Basically they will eat almost anything,
            making them a versatile predator and gatherer.
          </Text>
          <Text mb="4">
            They also have short, curved claws which allows them to climb trees;
            however they cannot dig for roots or ants as well as a grizzly bear
            can. Very few animals will attempt to attack a bear. Occasionally
            bears will kill each other over food competition. Sometimes bears
            are attacked by wolves or cougars, but not often. Most animals
            won&apos;t attempt attacking a bear, as that is a highly dangerous
            fight.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="#0074e0" colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BearsModal;
