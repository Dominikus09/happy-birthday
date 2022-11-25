import Link from "next/link";

export default function Navbar() {
  const navbar = [
    {
      name: "Home",
      route: "/",
    },
    // {
    //   name: "Note",
    //   route: "/note",
    // },
  ];
  return (
    <nav className="py-4 px-10 bg-white flex border-b">
      <div className="font-semibold text-xl text-pink-300">Daily App</div>
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-2 text-pink-500 cursor-pointer">
        {navbar.map((item, index) => (
          <div key={index} className="hover:text-lg">
            <Link href={item.route}>{item.name}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
