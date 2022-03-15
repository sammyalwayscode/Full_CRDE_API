const express = require("express");
const router = express.Router();
const trySchema = require("../Model/Model");

router.post("/", async (req, res) => {
  try {
    const postUsers = await trySchema.create({
      name: req.body.name,
      email: req.body.email,
      stark: req.body.stark,
      date: Date.now(),
    });

    res.status(200).json({
      message: "Data Posted Sucessfully",
      data: postUsers,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to post data",
      data: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const getAllData = await trySchema.find();
    res.status(200).json({
      message: "Data goten sucessfully",
      data: getAllData,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to get data",
      data: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getDataByID = await trySchema.findById(req.params.id);
    res.status(200).json({
      message: `${req.params.id} Goten Sucessfully`,
      data: getDataByID,
    });
  } catch (error) {
    res.status(404).json({
      message: `Couldn't get ${req.params.id}`,
      data: error.message,
    });
  }
});

//To edit a single data
router.put("/edit/:id", async (req, res) => {
  try {
    const editData = await trySchema.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: `${req.body.name} edited sucessfully`,
      data: editData,
    });
  } catch (error) {
    res.status(404).json({
      message: `Failed to edit ${req.params.id} `,
      data: error.message,
    });
  }
});

//Edits all data
router.patch("/editall/:id", async (req, res) => {
  try {
    const editAllData = await trySchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: `The ${req.body.name} data edited sucessfully`,
      data: editAllData,
    });
  } catch (error) {
    res.status(404).json({
      message: `Failed to edit ${req.params.id}`,
      data: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await trySchema.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: `${req.params.id} Deleted Sucessfully`,
      data: deleteData,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to delete data",
      data: error.message,
    });
  }
});

module.exports = router;
