import React from "react";

const page = ({ params }: { params: { chatId: string } }) => {
  return <div>Welcome {params?.chatId}</div>;
};

export default page;
