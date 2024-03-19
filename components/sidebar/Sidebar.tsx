import React from "react";
import ChatItem from "../chat/ChatItem";

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="z-40 w-[256px] h-full transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="items-center p-2 text-gray-900 rounded-lg text-xl font-semibold">
          Friends
        </div>
        <ul className="space-y-2 font-medium">
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
