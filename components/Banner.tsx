'use client'
//components
import { Nav } from '.'
//next image
import Image from 'next/image'
//parallax-mouse
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse'

interface IBannerProps {}

const Banner: React.FC<IBannerProps> = () => {
  return (
    <div className="bg-primary bg-pattern lg:min-h-[840px]">
      <div className="container mx-auto py-10">
        {/* logo && author && number */}
        <Nav />
        {/* parallax  */}
        <MouseParallaxContainer
          globalFactorX={0.1}
          globalFactorY={0.1}
          className="flex flex-col xl:flex-row items-center justify-center gap-x-20 "
        >
          {/* title */}
          <div className="font-bangers text-white text-center xl:text-left   md:hidden">
            <span className=" text-2xl xl:text-4xl">best pizza in town</span>
            <h1 className="text-4xl lg:text-6xl xl:text-8xl max-w-xl">
              Pizza perfection in every bite
            </h1>
          </div>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.5}
            className="font-bangers text-white text-center xl:text-left  hidden md:block "
          >
            <span className=" text-2xl xl:text-4xl">best pizza in town</span>
            <h1 className="text-4xl lg:text-6xl xl:text-8xl max-w-xl">
              Pizza perfection in every bite
            </h1>
          </MouseParallaxChild>
          {/* pizza big image */}
          <div className="md:hidden">
            <Image src={'/pizza-banner.png'} width={550} height={588} alt="" />
          </div>
          <MouseParallaxChild factorX={0.3} factorY={0.5}>
            <div className="relative hidden md:flex">
              <Image
                src={'/pizza-banner.png'}
                width={550}
                height={588}
                alt=""
              />
              {/* chilli-1 */}
              <MouseParallaxChild
                factorX={1}
                factorY={0.2}
                className="absolute top-5 left-0 hidden xl:flex"
              >
                <Image src={'/chilli-1.png'} width={163} height={90} alt="" />
              </MouseParallaxChild>
              {/* chilli-2 */}
              <MouseParallaxChild
                factorX={2}
                factorY={1}
                className="absolute top-10 left-0 hidden xl:flex"
              >
                <Image src={'/chilli-2.png'} width={124} height={177} alt="" />
              </MouseParallaxChild>
              {/* chilli-3 */}
              <MouseParallaxChild
                factorX={3}
                factorY={2}
                className="absolute bottom-10 -left-20 hidden xl:flex"
              >
                <Image src={'/chilli-2.png'} width={100} height={157} alt="" />
              </MouseParallaxChild>
              {/* garlic */}
              <MouseParallaxChild
                factorX={2}
                factorY={0.1}
                className="absolute bottom-5 -left-10 hidden xl:flex"
              >
                <Image
                  src={'/garlic-2.png'}
                  width={91}
                  height={96}
                  alt=""
                  className="-rotate-180"
                />
              </MouseParallaxChild>
              {/* garlic-2 */}
              <MouseParallaxChild
                factorX={2.5}
                factorY={2}
                className="absolute bottom-12 -left-0 hidden xl:flex"
              >
                <Image
                  src={'/garlic-1.png'}
                  width={91}
                  height={96}
                  alt=""
                  className="rotate-90"
                />
              </MouseParallaxChild>
              {/* leaves */}
              <MouseParallaxChild
                factorX={4}
                factorY={2}
                className="absolute bottom-12 left-20 hidden xl:flex"
              >
                <Image
                  src={'/leaves.png'}
                  width={177}
                  height={177}
                  alt=""
                  className=""
                />
              </MouseParallaxChild>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </div>
  )
}

export default Banner
