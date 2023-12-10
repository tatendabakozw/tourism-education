import {
  ArrowTrendingUpIcon,
  BellIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  CogIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react";

const navigation = [
  {
    name: "Abstracts",
    href: "/dashboard/abstracts",
    icon: ClipboardDocumentListIcon,
    current: false,
  },
  {
    name: "Customers Orders",
    href: "/dashboard/reviwers",
    icon: ShoppingBagIcon,
    current: false,
  },
  { name: "Store Settings", href: "/dashboard/settings", icon: CogIcon },
];

const buyer_navigation = [
  {
    name: "Analytics",
    href: "/dashboard",
    icon: ArrowTrendingUpIcon,
    current: false,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: BellIcon,
    current: false,
  },
  {
    name: "User Settings",
    href: "/dashboard/usersettings",
    icon: Cog6ToothIcon,
  },
];

interface Props {
  sidebarOpen: any;
  setSidebarOpen: any;
}

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const location = useLocation();
  const router = useNavigate();
  const userInfo = {
    name: "tatenda",
    photoURL: "",
    role: "user",
  };

  return (
    <div className="h-screen bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div
                onClick={() => router("/")}
                className="cursor pointer flex-shrink-0 flex items-center px-4"
              >
                <div className="relative self-center mx-auto h-32 w-32 my-4">
                  {/* <Image layout="fill" src={logo} alt="dashboard indicator of site name" /> */}
                  rcz
                </div>
              </div>
              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-slate-100 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  {buyer_navigation.map((item) => (
                    <div
                      onClick={() => router(item.href)}
                      key={item.name}
                      className={`${
                        location.pathname === item.href
                          ? "bg-slate-100"
                          : "bg-white"
                      } text-slate-700 cursor-pointer group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md`}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-slate-700"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-white pt-5 pb-4 overflow-y-auto">
            <div
              onClick={() => router("/")}
              className="flex items-center flex-shrink-0"
            >
              <div className="relative pt-4 pb-32 self-center mx-auto">
                Dashboard
              </div>
            </div>
            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-slate-100 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                {buyer_navigation.map((item) => (
                  <div
                    onClick={() => router(item.href)}
                    key={item.name}
                    className={`${
                      location.pathname === item.href
                        ? "bg-slate-100"
                        : "bg-white hover:bg-slate-100 "
                    } text-slate-700 group cursor-pointer flex items-center px-3 py-3 text-sm leading-6 font-medium rounded-md`}
                  >
                    <item.icon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-slate-700"
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
