import React from "react";

const InputItem = () => {
  return (
    <input
      // disabled={isLoading}
      className="px-8 py-4 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
      placeholder={`Type a message`}
      // {...field}
    />
  );
};

export default InputItem;
