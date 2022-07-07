/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        4N6SHETTY  by mozshetty {" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">4n6shetty.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer
