import { userSocketIDs } from "../app.js";

export const getOtherMember = (members, userId) => {
  if (!members || !Array.isArray(members) || members.length === 0) {
    return null;
  }
  
  if (members.length === 1) {
    // If there's only one member and it's the current user, return null
    return members[0]._id.toString() === userId.toString() ? null : members[0];
  }
  
  return members.find((member) => member._id.toString() !== userId.toString());
};

export const getSockets = (users = []) => {
  const sockets = users.map((user) => userSocketIDs.get(user.toString()));
  return sockets;
};

export const getBase64 = (file) =>
  `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
