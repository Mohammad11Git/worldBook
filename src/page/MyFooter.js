import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const MyFooter = () => {
    return ( 
        <div>
              <Footer bgDark>
                 <div className="w-full px-4 lg:px-24">
                  <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                   <div>
                      <Footer.Title title="Books" />
                       <Footer.LinkGroup col>
                       <Footer.Link>
                           <Link to="/">
                                Home
                           </Link>
                        </Footer.Link>
                        <Footer.Link>
                           <Link to="/about">
                                About
                           </Link>
                          </Footer.Link>
                       <Footer.Link>
                       <Link to="/shop">
                            Shop
                        </Link>
                        </Footer.Link>
                       <Footer.Link >
                        <Link to="/admin/dashboard">Sell Your Book</Link> 
                        </Footer.Link>
                        <Footer.Link>
                          <Link to="/blog">Blog</Link>
                        </Footer.Link>
                     </Footer.LinkGroup>
                 </div>
                  <div>
                     <Footer.Title title="help center" />
                      <Footer.LinkGroup col>
                      <Footer.Link href="#">Discord Server</Footer.Link>
                      <Footer.Link href="#">Twitter</Footer.Link>
                      <Footer.Link href="#">Facebook</Footer.Link>
                     <Footer.Link href="#">Contact Us</Footer.Link>
                     </Footer.LinkGroup>
                  </div>
                <div>
                <Footer.Title title="legal" />
                <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
             </Footer.LinkGroup>
              </div>
             <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-teal-200 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="World-of Books™" year={2024} className=" font-bold" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
                </div>
              </Footer>
        </div>
     );
}
 
export default MyFooter;