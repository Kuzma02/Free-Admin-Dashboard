const FollowNotification = ({imgSrc, username, date, hoursAgo, action} : { imgSrc: string; username: string; date: string; hoursAgo: string; action: string }) => {
  return (
    <div className="flex items-center justify-between dark:bg-black bg-white/30 py-5 px-5">
      {/* left */}
      <div className="flex gap-3 items-center">
        <img
          src={imgSrc}
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="dark:text-whiteSecondary text-blackPrimary">
            <b>@{username}</b> {action}
          </p>
          <p className="dark:text-whiteSecondary text-blackPrimary">{ date }</p>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col items-end gap-2">
        <div className="w-3 h-3 dark:bg-blue-500 bg-blue-700 rounded-full"></div>
        <p className="dark:text-whiteSecondary text-blackPrimary">{ hoursAgo }</p>
      </div>
    </div>
  );
};
export default FollowNotification;
