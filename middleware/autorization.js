"use-strict";
const 

const authorizationUser = async (req, res, next) => {
  try {
    const { userId, role } = req.user;
    if (role !== "password yang di entry user, yg asal asalan hurufnya") {
      throw new Error("bukan hak user");
    }
    next();
  } catch (error) {
    next(error);
  }
};

const authenticationAdmin = async (req, res, next) => {
    try {
      const { adminId, role } = req.admin;
      if (role !== "password yang di entry user, yg asal asalan hurufnya") {
        throw new Error("bukan hak user");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

const authorization = {authorizationUser, authenticationAdmin};

module.exports = authorization;