import expres from "express";
import {
    createProducts,
  getProducts,
  
} from "../controllers/productController.js";

const router = expres.Router();

router.get("/", getProducts);
// router.get("/:id", getProduct);
router.post("/", createProducts);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

export default router;