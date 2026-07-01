import { Router, Request, Response } from "express";
import { UserService } from "../services/user.services";

const router = Router();
const service = new UserService();

/**
 * Create User
 */
router.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const user = await service.createUser(name, email);

    res.status(201).json(user);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create user",
    });
  }
});

/**
 * Get All Users
 */
router.get("/users", async (_req: Request, res: Response) => {
  try {
    const users = await service.getUsers();

    res.json(users);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch users",
    });
  }
});

/**
 * Get User By ID
 */
router.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const user = await service.getUserById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found ❌",
      });
    }

    return res.json(user);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch user",
    });
  }
});

/**
 * Update User
 */
router.put("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const { name, email } = req.body;

    const user = await service.updateUser(id, name, email);

    if (!user) {
      return res.status(404).json({
        message: "User not found ❌",
      });
    }

    return res.json(user);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to update user",
    });
  }
});

/**
 * Delete User
 */
router.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const deleted = await service.deleteUser(id);

    if (!deleted) {
      return res.status(404).json({
        message: "User not found ❌",
      });
    }

    return res.json({
      message: "User deleted ✅",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to delete user",
    });
  }
});

export default router;
