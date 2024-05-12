import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'

function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">
                Abhi&apos;s
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
                <Footer.Link
                href='https://flixify-three.vercel.app/'
                target="_blank"
                rel='noopener noreferre'
                >
                  Flixify  
                </Footer.Link>
                <Footer.Link
                href='/about'
                target="_blank"
                rel='noopener noreferre'
                >
                    Abhi&apos;s Blog
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup col>
                <Footer.Link
                href='https://github.com/Abhishek87911'
                target="_blank"
                rel='noopener noreferre'
                >
                  GitHub 
                </Footer.Link>
                <Footer.Link
                href='#'
                >
                    Discord
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
                <Footer.Link
                href='#'
                
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                href='#'
                >
                    Terms &amp; Conditions
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Abhi's Blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsYoutube} />
            </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
