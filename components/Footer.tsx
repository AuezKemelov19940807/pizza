//next image
import Image from 'next/image'
//link
import Link from 'next/link'
//social icons
import { SocialIcon } from 'react-social-icons'

interface IFooterProps {}
const Footer: React.FC<IFooterProps> = () => {
  const socialIconStyle = { width: '40px', height: '40px' }
  return (
    <footer className="bg-pattern bg-primary">
      <div className="container mx-auto flex flex-col xl:flex-row xl:justify-between gap-y-8 py-12 items-center justify-center">
        {/* logo */}
        <Link href="/">
          <Image src={'/logo.svg'} width={180} height={180} alt="" />
        </Link>
        {/* social */}
        <div className="flex flex-wrap gap-8">
          <SocialIcon url="https://twitter.com" style={socialIconStyle} />
          <SocialIcon url="https://www.youtube.com" style={socialIconStyle} />
          <SocialIcon
            url="https://www.instagram.com/"
            style={socialIconStyle}
          />
          <SocialIcon url="https://www.pinterest.com" style={socialIconStyle} />
        </div>
        {/* copy */}
        <p className="text-white text-center md:text-left">
          Copyright &copy; Pizzaland 2023. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
