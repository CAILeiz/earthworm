import { mysqlTable, int, text } from "drizzle-orm/mysql-core";
import { user } from "./user";

export const courseHistory = mysqlTable("course-history", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").references(() => user.id),
  courseId: int("course_id").notNull().default(0),
  completionCount: int("completion_count").notNull().default(0),
  progress: text("progress").notNull(),
});
