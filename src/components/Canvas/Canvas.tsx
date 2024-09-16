import { VerificationCheck } from "../Icon/Icon";
import {
  AuthorImage,
  AuthorInfo,
  AuthorName,
  AuthorNameAndNip05Container,
  AuthorNameContainer,
  AuthorNip05,
  BackgroundGradient,
  CanvasContainer,
  CardBlurShadow,
  CardContainer,
  CardContent,
  CardContentContainer,
  CardWrapper,
  InnerGradient,
  ResizeKnob,
  ResizeKnobContainer,
  ResizeKnobPosition,
  ResizeKnobs,
  StatItem,
  TweetContent,
  TweetStats,
  TweetTimestamp,
  VerificationCheckContainer,
  VerificationIconContainer,
} from "./Canvas.styled";

export function Canvas() {
  return (
    <CanvasContainer>
      <CardWrapper>
        <ResizeKnobs>
            <ResizeKnobContainer $position={ResizeKnobPosition.left}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>

            <ResizeKnobContainer $position={ResizeKnobPosition.right}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>

            <ResizeKnobContainer $position={ResizeKnobPosition.bottom}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>
        </ResizeKnobs>
        <CardContainer>
          <CardContent>
            <BackgroundGradient />
            <div
              style={{ maxWidth: "39rem", width: "100%", position: "relative" }}
            >
              <CardBlurShadow />
              <CardContentContainer>
                <InnerGradient />
                <AuthorInfo>
                  <AuthorImage src="https://primal.b-cdn.net/media-cache?s=o&a=0&u=https%3A%2F%2Fimage.nostr.build%2F69b1c2c1510528e4e24b938679d66d84e34346808f5c52daf4ee794d24f82fd2.jpg" />
                  <AuthorNameAndNip05Container>
                    <AuthorNameContainer>
                        <AuthorName>DJ Hemath</AuthorName>
                        <VerificationCheckContainer>
                            <VerificationIconContainer>
                                <VerificationCheck />
                            </VerificationIconContainer>
                        </VerificationCheckContainer> 
                    </AuthorNameContainer>
                    <AuthorNip05>djhemath@iris.io</AuthorNip05>
                  </AuthorNameAndNip05Container>
                </AuthorInfo>
                <TweetContent>
                  Every informed person needs to know about Bitcoin because it
                  might be one of the world's most important developments.
                </TweetContent>
                <TweetTimestamp>4:32 PM · 16 Sep, 2024</TweetTimestamp>
                <TweetStats>
                  <StatItem>
                    <span>4.1K</span> replies
                  </StatItem>
                  <StatItem>
                    <span>284</span> zaps
                  </StatItem>
                  <StatItem>
                    <span>7.2K</span> likes
                  </StatItem>
                  <StatItem>
                    <span>7.2K</span> reposts
                  </StatItem>
                </TweetStats>
              </CardContentContainer>
            </div>
          </CardContent>
        </CardContainer>
      </CardWrapper>
    </CanvasContainer>
  );
}
