const { User } = require("../model/UserSchema");

const CreateUser = async (request, response) => {
  try {
    const username = await User.findOne({ username: request.body.username });

    if (username) {
      response.status(409).json({
        status: "DuplicateUser",
        message: "User already exists please create a unique username ",
      });
    }
    const userData = request.body;
    const newUser = new User(userData);
    let data = await newUser.save();
    response.status(200).json({
      status: "Ok",
      message: "New User Created Successfully",
      data: data,
    });
  } catch (error) {
    console.log("Error While The Create New User", error.message);
    response.status(500).json({
      status: "Faild",
      message: "Unavailbe To Create New User",
      data: data,
    });
  }
};

const LoginUser = async (request, response) => {
  try {
    let username = request.body.username;
    let password = request.body.password;
    const Login = await User.findOne({
      username: username,
      password: password,
    });

    if (Login) {
      response.status(200).json({
        status: "ok",
        message: "User Login Successfully",
        data: Login,
      });
    } else {
      response.status(400).json({
        status: "login faild",
        message: "invaid details please currect the user details",
      });
    }
  } catch (error) {
    console.log("Error While The Login  User", error.message);
    response.status(500).json({
      status: "Faild",
      message: "Unavailbe To Login User",
      data: data,
    });
  }
};
module.exports = { CreateUser, LoginUser };
