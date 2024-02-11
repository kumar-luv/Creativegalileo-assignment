import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";

const User = (props) => {
  const { customer } = props;

  return (
    <div className="flex items-center w-full py-2 border-b border-gray-300 bg-white p-2">
      <HiDotsVertical className="mr-2" />
      <span className="ml-2 w-1/6">{customer?.cgId}</span>
      <span className="ml-10 w-2/6">{customer?.name}</span>
      <span className="ml-0 w-1/6">{customer?.dialCode}</span>
      <span className="ml-2 w-1/6">{customer?.mobile}</span>
      <span className="ml-2 w-2/6 text-center">{customer?.email}</span>
      <span className="ml-2">
        {customer?.recordStatus ? <GrStatusGood className="text-green-500" /> : <GrStatusGood className="text-red-500" />}
      </span>
    </div>
  );
};

export default User;

