import { Router } from "express";
import { UserService } from "../services/user.services";

const router = Router();

const service = new UserService();

router.post("/users", async (req, res) => {
  const { name, email } = req.body;

  const user = await service.createUser(name, email);

  res.json(user);
});


router.get("/users", async (_req, res) => {
  const users = await service.getUsers();

  res.json(users);
});

export default router;

router.get("/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  const user = await service.getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found ❌",
    });
  }

  res.json(user);
});

router.put("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  const user = await service.updateUser(id, name, email);

  if (!user) {
    return res.status(404).json({
      message: "User not found ❌",
    });
  }

  res.json(user);
});

router.delete("/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  const deleted = await service.deleteUser(id);

  if (!deleted) {
    return res.status(404).json({
      message: "User not found ❌",
    });
  }

  res.json({
    message: "User deleted ✅",
  });
});