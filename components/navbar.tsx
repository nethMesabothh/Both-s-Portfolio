import Image from "next/image";
import { navIcons, navLinks } from "@/constants";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
      <div className="text-black">
        <Image src="/images/logo.svg" width="20" height="20" alt="logo" />
        <p className="font-bold">Both&apos;s Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                width={20}
                height={20}
                alt={`image-${id}`}
                className="icon-hover"
              />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
