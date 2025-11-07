"use client";
import { Box, Text, Button, Flex, Image, Link } from "@chakra-ui/react";
import PageTransition from "@/components/ui/PageTransition";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default function Home() {
  const images = [
    "/Slideshow/Slide1.jpg",
    "/Slideshow/Slide2.jpg",
    "/Slideshow/Slide3.jpg",
    "/Slideshow/Slide4.jpg",
    "/Slideshow/Slide5.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [opened, setOpened] = useState(false);
  const openingRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!opened) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [opened]);

  return (
    <PageTransition>
      <audio ref={audioRef} src="/backgroundmusic.mp3" loop />
      <Flex w="100vw" h="100vh" overflow="hidden">
        <Box
          flex="2"
          height="100vh"
          position="sticky"
          top="0"
          bgImage="linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/Cover.webp')"
          bgSize="cover"
          bgPosition="center"
          display={{ base: "none", md: "flex" }}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          color="white"
          p="40px"
          borderRight="1px solid rgba(255,255,255,0.25)"
        >
          <Text fontSize="sm" fontWeight="bold" letterSpacing="2px">
            WEDDING ANNOUNCEMENT
          </Text>
          <Text fontSize="5xl" fontWeight="bold">
            TIFFANY & <br /> JARED
          </Text>
          <Text
            mt={4}
            fontStyle="italic"
            fontSize="xl"
            lineHeight="1.7"
            whiteSpace="pre-line"
          >
            {`"Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada." 
            — Sapardi Djoko Damono"`}
          </Text>
        </Box>

        <Box flex="1" height="100vh" overflowY="auto" position="relative">
          <AnimatePresence mode="wait">
            {!opened && (
              <motion.div
                key="cover"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ width: "100%", height: "100%" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  bgImage="linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/Cover2.jpg')"
                  bgSize="cover"
                  bgPosition="center"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  color="white"
                  position="relative"
                >
                  <Text
                    fontSize="md"
                    position="absolute"
                    top="2.5rem"
                    letterSpacing="2px"
                    fontWeight="bold"
                  >
                    WEDDING ANNOUNCEMENT
                  </Text>

                  <Text fontSize="3xl">TIFFANY & JARED</Text>
                  <Text fontSize="xl" opacity={0.8} fontStyle="italic">
                    #TImetoshaRE
                  </Text>

                  <Button
                    mt={8}
                    variant="outline"
                    bg="white"
                    color="black"
                    fontStyle="italic"
                    onClick={() => {
                      setOpened(true);
                      if (audioRef.current) {
                        audioRef.current.play().catch(() => {
                          console.log("musikkk main");
                        });
                      }
                    }}
                  >
                    Open
                  </Button>
                </Box>
              </motion.div>
            )}

            {opened && (
              <motion.div
                key="opening"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Box position="absolute" inset="0" zIndex="0" overflow="hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1.12 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 3.5, ease: "easeInOut" }}
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${images[currentImage]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "absolute",
                        inset: 0,
                      }}
                    />
                  </AnimatePresence>
                  <Box position="absolute" inset="0" bg="rgba(0,0,0,0.55)" />
                </Box>

                <Box
                  position="relative"
                  zIndex="1"
                  w="100%"
                  h="100%"
                  color="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  textAlign="center"
                >
                  <Text
                    fontSize="md"
                    position="absolute"
                    top="2.5rem"
                    letterSpacing="2px"
                    fontWeight="bold"
                  >
                    WEDDING ANNOUNCEMENT
                  </Text>
                  <Text fontSize="3xl">TIFFANY & JARED</Text>
                  <Text fontSize="xl" opacity={0.8} fontStyle="italic">
                    #TImetoshaRE
                  </Text>
                  <Box
                    position="absolute"
                    bottom="2.5rem"
                    right="2.5rem"
                    display="flex"
                    alignItems="center"
                    gap="0.5rem"
                    cursor="pointer"
                    onClick={() =>
                      openingRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Text fontSize="md" fontWeight="bold" letterSpacing="2px">
                      SCROLL TO BEGIN
                    </Text>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="17"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </Box>
                </Box>

                <Box
                  ref={openingRef}
                  w="100%"
                  bg="white"
                  color="black"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  textAlign="center"
                >
                  <Text fontSize="md" fontWeight="bold" mb="30px" mt="30px">
                    DEAR MR-MRS-MS,
                    <br /> FAMILY AND FRIENDS
                  </Text>
                  <Text fontSize="4xl" fontWeight="bold" mb="4px">
                    Welcome to Tiffany & Jared’s Wedding Website
                  </Text>
                  <Text
                    fontSize="lg"
                    maxW="600px"
                    lineHeight="1.8"
                    fontStyle="italic"
                    paddingLeft="20px"
                    paddingRight="20px"
                  >
                    Together with joyful hearts and the grace of God, we
                    joyfully announce the upcoming of our marriage.
                  </Text>
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    style={{
                      width: "250px", // ukuran kartu image
                      height: "330px",
                      marginTop: "40px",
                    }}
                  >
                    {images.map((src, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={src}
                          alt={`slide-${index}`}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          borderRadius="lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Box
                    w="100%"
                    color="black"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    p="80px 40px"
                    mt="40px"
                  >
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                      MEET THE BRIDE & GROOM
                    </Text>

                    <Flex gap={8} flexWrap="wrap" justifyContent="center">
                      <Box textAlign="center">
                        <Image
                          src="/groom.webp"
                          w="200px"
                          objectFit="cover"
                          alt="gambar pengantin"
                          mb={4}
                        />
                      </Box>
                    </Flex>

                    <Text fontSize="2xl">TIFFANY SMITH</Text>
                    <Link
                      href="https://www.instagram.com/tiffanyinvitato/"
                      fontSize="lg"
                      maxW="700px"
                      lineHeight="1.8"
                      isExternal
                      color="black"
                    >
                      @tiffanyinvitato
                    </Link>
                    <Text
                      fontSize="lg"
                      maxW="700px"
                      lineHeight="1.8"
                      mb={10}
                      fontStyle="italic"
                    >
                      The Daughter of
                      <br />
                      Mr. Smith & Mrs. Bellyna
                    </Text>
                    <Text fontSize="2xl">ROBIN JARED LUCAS</Text>
                    <Link
                      href="https://www.instagram.com/jaredinvitato/"
                      fontSize="lg"
                      maxW="700px"
                      lineHeight="1.8"
                      isExternal
                      color="black"
                    >
                      @jaredinvitato
                    </Link>
                    <Text
                      fontSize="lg"
                      maxW="700px"
                      lineHeight="1.8"
                      mb={10}
                      fontStyle="italic"
                    >
                      The Son of
                      <br />
                      Mr. Lucas & Mrs. Anita
                    </Text>
                  </Box>
                  <Box
                    w="100%"
                    bg="rgba(249, 247, 244, 1)"
                    color="black"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    p="80px 40px"
                    mt="40px"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      color="var(--chakra-colors-bgAlternative)"
                      fontSize="2.8rem"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "var(--chakra-colors-bgAlternative)" }}
                    >
                      <path d="M4.58341 17.3211C3.55316 16.2275 3 15 3 13.0104C3 9.51092 5.45651 6.37372 9.03059 4.82324L9.92328 6.20085C6.58804 8.00545 5.93618 10.3461 5.67564 11.8221C6.21263 11.5444 6.91558 11.4467 7.60471 11.5106C9.40908 11.6778 10.8312 13.1591 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0096 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2275 13 15 13 13.0104C13 9.51092 15.4565 6.37372 19.0306 4.82324L19.9233 6.20085C16.588 8.00545 15.9362 10.3461 15.6756 11.8221C16.2126 11.5444 16.9156 11.4467 17.6047 11.5106C19.4091 11.6778 20.8312 13.1591 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0096 14.5834 17.3211Z"></path>
                    </svg>

                    <Text fontSize="xl" fontStyle="italic" mb={4}>
                      “And of His signs is that He created for you from
                      yourselves mates that you may find tranquility in them,
                      and He placed between you affection and mercy. Indeed in
                      that are signs for a people who give thought.”
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                      - Q.S. Ar-Rum: 21
                    </Text>
                  </Box>
                  <Box
                    w="100%"
                    color="black"
                    display="flex"
                    flexDirection="column"
                    textAlign="left"
                    p="40px"
                  >
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                      PLACE & TIME
                    </Text>
                    <Text fontSize="3xl" mb={4}>
                      Holy Matrimony
                    </Text>
                    <Text fontSize="xl" mb={4}>
                      Date: Monday, 26 February 2024
                      <br />
                      Time: 10.00 WIB
                    </Text>
                  </Box>
                  <Box
                    w="100%"
                    h="280px"
                    bgImage="linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/Footer.webp')"
                    bgSize="cover"
                    bgPosition="50% 35%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    p="40px"
                  >
                    <Text fontSize="2xl" color="white" mb={4}>
                      Wedding Gift
                    </Text>
                    <Button
                      variant="outline"
                      bg="white"
                      color="black"
                      fontStyle="italic"
                    >
                      Send Gift
                    </Button>
                  </Box>
                  <Box
                    w="100%"
                    h="280px"
                    bgImage="linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/Footer.webp')"
                    color="black"
                    alignItems="center"
                    textAlign="center"
                    display="flex"
                    bgSize="cover"
                    bgPosition="50% 40%"
                    flexDirection="column"
                    justifyContent="center"
                    p="40px"
                  >
                    <Text fontSize="2xl" color="white" mb={4}>
                      Live Streaming
                    </Text>
                    <Button
                      as="a"
                      href="https://www.youtube.com/watch?v=ApX0LaS6gSM&feature=youtu.be"
                      variant="outline"
                      bg="white"
                      color="black"
                      fontStyle="italic"
                    >
                      Open Via Youtube
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Flex>
    </PageTransition>
  );
}
