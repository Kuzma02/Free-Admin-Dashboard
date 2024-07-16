// *********************
// Role of the component: Follow notification component that displays the follow notification
// Name of the component: FollowNotification.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <SimpleNotification username="johndoe" imgSrc="/src/assets/random user 1.jpg" date="Thursday 4:20pm" hoursAgo="2 hours ago" action="followed you" />
// Input parameters: roles: { username: string; imgSrc: string; date: string; hoursAgo: string; action: string }
// Output: FollowNotification component that displays the follow notification
// *********************

const FollowNotification = ({
  imgSrc,
  username,
  date,
  hoursAgo,
  action,
}: {
  imgSrc: string;
  username: string;
  date: string;
  hoursAgo: string;
  action: string;
}) => {
  return (
    <div className="flex items-center justify-between dark:bg-black bg-white/30 py-5 px-5">
      {/* left */}
      <div className="flex gap-3 items-center">
        <img src={imgSrc} alt="user" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <p className="dark:text-whiteSecondary text-blackPrimary">
            <b>@{username}</b> {action}
          </p>
          <p className="dark:text-whiteSecondary text-blackPrimary">{date}</p>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col items-end gap-2">
        <div className="w-3 h-3 dark:bg-blue-500 bg-blue-700 rounded-full"></div>
        <p className="dark:text-whiteSecondary text-blackPrimary">{hoursAgo}</p>
      </div>
    </div>
  );
};
export default FollowNotification;
