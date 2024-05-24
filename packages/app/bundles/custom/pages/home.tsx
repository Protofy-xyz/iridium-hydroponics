import { Theme, YStack, Text, XStack, Paragraph, SizableText } from "@my/ui";
import { UIWrapLib, UIWrap, SSR, TintSection, Spacer, ContainerLarge, BigTitle, LinkGroup, LinkGroupItem, HCenterStack, NextLink, TooltipContainer, DiscordIcon, Section, SpotLight, GithubIcon, ButtonSimple, HorizontalBox, SectionBlock, HoveredGroup, BlockTitle, BackgroundGradient, ElevatedArea, GridElement, RainbowText, FeatureItem, PageGlow, withSession, Page, Grid, useEditor,  Head1, Head3, Head2  } from "protolib";
import { ChevronRight, Star } from "@tamagui/lucide-icons";
import Link from "next/link";
import { DefaultLayout } from "../../../layout/DefaultLayout";
import { Protofy } from "protolib/base";
import React from "react";

const isProtected = Protofy("protected", false);

const Home = (props) => {
  return (
    <Page id="home-page">
      <DefaultLayout title="Iridium Hydroponics " description="Made with love from Barcelona" footer={false} tintSwitcher={false}>
        <Section>
          <YStack py="$8" ai="center">
            <Head1 color={"$color7"} my="$1" $gtLg={{ scale: 1.4 }}>
              Iridium Hydroponics
            </Head1>
            <Head3 fontWeight="400">
              Create your own automatized garden
            </Head3>
          </YStack>
          <YStack gap="$10" maw="950px" als="center">
            <img src="media/home-cover.png" width="100%" style={{ minHeight: '380px', objectFit: 'cover' }} />
            <YStack alignSelf="center" position="absolute" top="320px">
              <Link href="/documentation">
                <ButtonSimple text={true} size="$3" padding="$4" theme="green" alignSelf="center">
                  go to documentation
                </ButtonSimple>
              </Link>
            </YStack>
            <Grid gap="25" itemMinWidth="280">
              <GridElement title="Modular System">
                <Text fontWeight="400">A versatile system allowing easy expansion and scalability of hydroponic infrastructure, adapting to farm needs.</Text>
              </GridElement>
              <GridElement title="Precise Monitoring">Equipped with sensors, our system offers precise monitoring of pH, conductivity, and nutrient levels for optimal growth.</GridElement>
              <GridElement title="Smart Farm">Our platform integrates data management enabling analysis and reporting to optimize farm performance, user-friendly for remote control.</GridElement>
            </Grid>
          </YStack>
        </Section>

        <Section paddingTop="$10" paddingBottom="$15" borderColor="$color3">
          <Theme reset={false}>
            <ContainerLarge position="relative">
              <Head2 fontWeight="400">
                About the project
              </Head2>
              <XStack px="$6" pt="$8" gap="$4" $sm={{ flexDirection: "column", px: 0 }}>
                <YStack w="50%" $sm={{ w: "100%" }}>
                  <YStack gap="$4">
                    <FeatureItem margin="$4" label="We offer">
                      <Text fontWeight="400">The aim is to maximize the use of water and nutrients while increasing crop production per square meter compared to traditional agriculture. This is achieved by automating monitoring and maintenance processes to optimize plant growth. Is also easy to operate, even for users with no previous experience in hydroponics.</Text>
                    </FeatureItem>
                    <FeatureItem label="What can you do with it">Access real-time updates on the status of your garden, including data on its progress. Choose between automated cultivation or manual control based on your preference. Learn the fundamentals of hydroponics with open-source resources tailored to your specific needs.</FeatureItem>
                  </YStack>
                </YStack>
                <YStack w="50%" $sm={{ w: `100%` }}>
                  <YStack gap="$4">
                    <FeatureItem label="What is it">Access a user-friendly platform to control your garden through personalized hardware, tailored to your preferences. Simply log in to the platform to manage and monitor your garden with ease, selecting the hardware that best suits your needs.</FeatureItem>
                  </YStack>
                </YStack>
              </XStack>
            </ContainerLarge>
          </Theme>
        </Section>
      </DefaultLayout>
    </Page>
  );
};

const cw = UIWrapLib('@my/ui')

export default {
  route: Protofy("route", "/"),
  component: (props) =>
    useEditor(
      <Home {...props} />,
      {
        path: "/packages/app/bundles/custom/pages/home.tsx",
        components: {
          ...UIWrap("DefaultLayout", DefaultLayout, "../../../layout/DefaultLayout"),
          ...cw("YStack", YStack),
          ...cw("Text", Text),
          ...cw("XStack", XStack),
          ...cw("Paragraph", Paragraph),
          ...cw("Theme", Theme),
          ...cw("SizableText", SizableText),
          ...UIWrap("ChevronRight", ChevronRight, "@tamagui/lucide-icons", "ChevronRight"),
          ...UIWrap("Star", Star, "@tamagui/lucide-icons", "Star")
        }
      }
    ),
  getServerSideProps: SSR(async (context) => withSession(context, isProtected ? Protofy("permissions", []) : undefined)),
};
