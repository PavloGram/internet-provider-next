import styled from "styled-components";
import bgImg from '../../public/single-imge.jpg'
export const HeroStyle = styled.div`
  width: 100%;
  height: 276px;
  /* background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(47, 48, 58, 0.4)),
      to(rgba(47, 48, 58, 0.4))
    ),
    url(../../public/single-imge.jpg); */
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${bgImg});
  background-position: center;
  background-size: cover;
`;
// bg-hero-bg  w-full h-[276px] lg:h-[460px] bg-cover bg-top flex justify-center items-center text-white font-bold text-[20px]
