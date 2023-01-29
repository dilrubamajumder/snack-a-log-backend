const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getOneSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks");

const { checkBoolean } = require("../validations/checkSnacks.js");

// INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSnack = await getOneSnack(id);

  if (!oneSnack.message) {
    res.status(200).json(oneSnack);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
snacks.post("/", checkBoolean, async (req, res) => {
  try {
    const newSnack = await createSnack(req.body);
    res.status(200).json(newSnack);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
});

// DELETE
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack.id) {
      res.status(200).json(deletedSnack);
    } else {
      res.status(404).json({ error: "Snack not found" });
    }
  } catch (error) {
    return error;
  }
});

// UPDATE
snacks.put("/:id", checkBoolean, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSnack = await updateSnack(id, req.body);

    if (updatedSnack.id) {
      res.status(200).json(updatedSnack);
    } else {
      res.status(404).json({ error: "Snack not found" });
    }
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

module.exports = snacks;