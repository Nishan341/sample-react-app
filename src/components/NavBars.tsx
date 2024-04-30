import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { MdApi } from "react-icons/md";

const NavBars = () => {
  return (
    <Navbar className="bg-slate-100 h-16">
      <NavbarBrand>
        <MdApi className="relative w-32 h-32 text-primary" />
        <p className="font-bold text-inherit"> Sesmic API </p>
      </NavbarBrand>
      <NavbarContent className="absolute inset-y-0 right-0 w-16...">
        {/* <NavbarsItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarsItem>
        <NavbarsItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarsItem>
        <NavbarsItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarsItem> */}
      </NavbarContent>
      {/* <NavbarsContent justify="end">
        <NavbarsItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarsItem>
        <NavbarsItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarsItem>
      </NavbarsContent> */}
    </Navbar>
  );
};

export default NavBars;
