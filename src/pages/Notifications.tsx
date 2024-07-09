import { HiOutlineEye } from "react-icons/hi";
import { SimpleNotification, Sidebar, WhiteButton } from "../components";

const Notifications = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Notifications
              </h2>
            </div>
            <WhiteButton
                link="/notifications"
                textSize="lg"
                width="48"
                py="2"
                text="Set all as read"
              >
                <HiOutlineEye className="dark:text-blackPrimary text-whiteSecondary text-xl" />
              </WhiteButton>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8">
            {/* Notifications */}
            <div className="flex flex-col gap-1">
              {/* Single Notification */}
              <SimpleNotification
                username="johndoe"
                imgSrc="/src/assets/random user 1.jpg"
                date="Thursday 4:20pm"
                hoursAgo="2 hours ago"
                action="followed you"
              />
              <SimpleNotification
                username="markkwik"
                imgSrc="/src/assets/random user 2.jpg"
                date="Thursday 3:15pm"
                hoursAgo="3 hours ago"
                action="liked your post"
              />
              <SimpleNotification
                username="markdoe"
                imgSrc="/src/assets/random user 3.jpg"
                date="Thursday 1:30pm"
                hoursAgo="4 hours ago"
                action="followed you"
              />
              <SimpleNotification
                username="gg86"
                imgSrc="/src/assets/random user 4.jpg"
                date="Thursday 12:10am"
                hoursAgo="5 hours ago"
                action="invited you in a private group"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
