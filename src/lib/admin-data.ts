export const adminStudents = [
  { initials: "CM", name: "Camila Mendes", country: "Brasil", course: "Primeras palabras", progress: 42, status: "active" },
  { initials: "AR", name: "Alex Reed", country: "Estados Unidos", course: "Conversaciones con ritmo", progress: 68, status: "active" },
  { initials: "BS", name: "Bruno Silva", country: "Brasil", course: "Primeras palabras", progress: 18, status: "attention" },
  { initials: "JL", name: "Jordan Lee", country: "Estados Unidos", course: "Español profesional", progress: 84, status: "active" },
] as const;

export const adminActivities = [
  { day: "31", month: "JUL", time: "19:00", title: "Club de conversación", group: "A1 · 8 estudiantes", color: "blue" },
  { day: "02", month: "AGO", time: "18:30", title: "Taller: expresiones colombianas", group: "A2–B1 · 12 estudiantes", color: "pink" },
  { day: "05", month: "AGO", time: "20:00", title: "Español para reuniones", group: "B1–B2 · 6 estudiantes", color: "yellow" },
] as const;

export const adminCourses = [
  { name: "Primeras palabras", level: "A1", students: 18, lessons: 12, completion: 54, state: "published" },
  { name: "Conversaciones con ritmo", level: "A2–B1", students: 12, lessons: 16, completion: 68, state: "published" },
  { name: "Español profesional", level: "B1–B2", students: 6, lessons: 8, completion: 25, state: "draft" },
] as const;
