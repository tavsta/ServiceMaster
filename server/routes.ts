import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { verifyOtpSchema, insertBookingSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Auth routes
  app.post("/api/auth/request-otp", async (req, res) => {
    const { phone } = req.body;

    const user = await storage.getUserByPhone(phone);
    if (!user) {
      return res.status(400).json({ 
        message: "Số điện thoại chưa được đăng ký. Vui lòng đăng ký trước." 
      });
    }

    // In production, send real OTP. Here we use static 123456
    res.json({ success: true });
  });

  app.post("/api/auth/register/request-otp", async (req, res) => {
    const { phone } = req.body;

    const existingUser = await storage.getUserByPhone(phone);
    if (existingUser) {
      return res.status(400).json({ 
        message: "Số điện thoại đã được đăng ký. Vui lòng đăng nhập." 
      });
    }

    // In production, send real OTP
    res.json({ success: true });
  });

  app.post("/api/auth/register/verify-otp", async (req, res) => {
    const result = verifyOtpSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const { phone, otp } = result.data;

    if (otp !== "123456") {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    const user = await storage.createUser({ phone });
    await storage.updateUserAuth(user.id, true);

    res.json({ success: true });
  });

  app.post("/api/auth/verify-otp", async (req, res) => {
    const result = verifyOtpSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const { phone, otp } = result.data;

    if (otp !== "123456") {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    const user = await storage.getUserByPhone(phone);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await storage.updateUserAuth(user.id, true);
    req.session.userId = user.id;

    res.json({ success: true });
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  });

  app.get("/api/auth/me", async (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      return res.status(401).json(null);
    }

    const user = await storage.getUser(userId);
    res.json(user);
  });

  // Service routes
  app.get("/api/services", async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Booking routes
  app.post("/api/bookings", async (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const result = insertBookingSchema.safeParse({ ...req.body, userId });
    if (!result.success) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const booking = await storage.createBooking(result.data);
    res.json(booking);
  });

  app.get("/api/bookings", async (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const bookings = await storage.getBookings(userId);
    res.json(bookings);
  });

  return httpServer;
}