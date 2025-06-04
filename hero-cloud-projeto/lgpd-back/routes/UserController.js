import express from "express";
import userService from "../services/UserService.js";
import multer from "multer";
import process from "process";

let router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      req.body.first_name +
        "_" +
        req.body.last_name +
        "_" +
        Date.now() +
        "_" +
        file.originalname
    );
  },
});

const upload = multer({ storage: storage }).single("profile_picture");

router.post("/addUser", async (req, res) => {
  upload(req, res, async (err) => {
    const userModel = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      profile_picture: req.file ? req.file.path : null,
    };
    if (err) {
      return res.status(500).json({
        message: "Error uploading file",
        error: err.message,
      });
    }

    const user = await userService.saveUser(userModel);
    return res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  });
});

router.get("/getAllUsers", async (req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json({
    message: "Users retrieved successfully",
    users: allUsers,
  });
});

router.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  return res.status(200).json({
    message: "User retrieved successfully",
    user: user,
  });
});

router.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await userService.deleteUserById(id);
  if (!deletedUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  return res.status(200).json({
    message: "User deleted successfully ",
    user: deletedUser,
  });
});

router.put("/updateUser/:id", async (req, res) => {
  upload(req, res, async (err) => {
    const id = req.params.id;
    const userModel = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      profile_picture: req.file ? req.file.path : null,
    };
    if (err) {
      return res.status(500).json({
        message: "Error uploading file",
        error: err.message,
      });
    }
    const updatedUser = await userService.updateUserById(id, userModel);
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found or no changes made",
      });
    }
    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  });
});

router.get("/userImage/:id", async (req, res) => {
  const id = req.params.id;
  const user = await userService.getUserById(id);
  if (!user || !user.profile_picture) {
    return res.status(404).json({
      message: "User or profile picture not found",
    });
  }
  
  res.sendFile(process.cwd() + "/" + user.profile_picture, (err) => {
    if (err) {
      return res.status(500).json({
        message: "Error retrieving image",
        error: err.message,
      });
    }
  });
}
);

export default router;
