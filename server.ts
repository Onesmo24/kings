import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock Menu Data
  const menuItems = [
    { id: 1, name: "Kings Special Platter", category: "Food", price: 25000, description: "A mix of grilled meats, plantains, and fresh salad.", image: "https://picsum.photos/seed/platter/400/300", bestSeller: true },
    { id: 2, name: "Dodoma Sunset Mocktail", category: "Drinks", price: 8000, description: "Refreshing blend of tropical fruits and mint.", image: "https://picsum.photos/seed/mocktail/400/300", bestSeller: true },
    { id: 3, name: "Grilled Tilapia", category: "Food", price: 18000, description: "Fresh lake fish grilled with local spices.", image: "https://picsum.photos/seed/fish/400/300" },
    { id: 4, name: "Classic Beef Burger", category: "Food", price: 15000, description: "Premium beef patty with caramelised onions and cheese.", image: "https://picsum.photos/seed/burger/400/300" },
    { id: 5, name: "Cappuccino", category: "Drinks", price: 6000, description: "Rich espresso with steamed milk foam.", image: "https://picsum.photos/seed/coffee/400/300" },
    { id: 6, name: "Local Brew Selection", category: "Drinks", price: 5000, description: "A variety of local Tanzanian beverages.", image: "https://picsum.photos/seed/beer/400/300" },
  ];

  // API Routes
  app.get("/api/menu", (req, res) => {
    res.json(menuItems);
  });

  app.post("/api/orders", (req, res) => {
    const order = req.body;
    console.log("New Order Received:", order);
    // In a real app, save to DB and trigger notifications
    res.status(201).json({ message: "Order placed successfully!", orderId: Math.floor(Math.random() * 100000) });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
