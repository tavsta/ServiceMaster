import { type User, type InsertUser, type Booking, type InsertBooking, type Service } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByPhone(phone: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserAuth(id: number, authenticated: boolean): Promise<User>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(userId: number): Promise<Booking[]>;
  getServices(): Promise<Service[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookings: Map<number, Booking>;
  private services: Map<number, Service>;
  private currentUserId: number;
  private currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.services = new Map();
    this.currentUserId = 1;
    this.currentBookingId = 1;

    // Pre-configure default user
    this.users.set(1, {
      id: 1,
      phone: "0389167693",
      authenticated: false,
    });

    // Pre-configure services
    const services: Service[] = [
      {
        id: 1,
        name: "Điều hoà",
        description: "Sửa chữa, bảo dưỡng và lắp đặt điều hoà",
        imageUrl: "https://images.unsplash.com/photo-1552853160-8ec65527b252",
      },
      {
        id: 2,
        name: "Tivi",
        description: "Sửa chữa và cài đặt tivi",
        imageUrl: "https://images.unsplash.com/photo-1646821804389-9778ce2a4fd7",
      },
      {
        id: 3,
        name: "Tủ lạnh",
        description: "Sửa chữa và bảo dưỡng tủ lạnh",
        imageUrl: "https://images.unsplash.com/photo-1597423498219-04418210827d",
      },
      {
        id: 4,
        name: "Máy giặt",
        description: "Sửa chữa và bảo dưỡng máy giặt",
        imageUrl: "https://images.unsplash.com/photo-1597423498089-af6fa7d122bf",
      },
    ];

    services.forEach(service => this.services.set(service.id, service));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByPhone(phone: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.phone === phone);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id, authenticated: false };
    this.users.set(id, user);
    return user;
  }

  async updateUserAuth(id: number, authenticated: boolean): Promise<User> {
    const user = await this.getUser(id);
    if (!user) throw new Error("User not found");
    const updatedUser = { ...user, authenticated };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const newBooking: Booking = { ...booking, id, status: "pending" };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async getBookings(userId: number): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      booking => booking.userId === userId
    );
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
}

export const storage = new MemStorage();
