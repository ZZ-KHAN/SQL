// 1. Выбираем базу данных
use("universityDB");

// 2. Очищаем коллекцию перед каждым запуском (чтобы данные не дублировались)
db.students.drop();

// 3. Добавляем 1-й документ (insertOne)
db.students.insertOne({
  studentId: 1001,
  name: "Aibek",
  age: 20,
  group: "IS-24-21",
  gpa: 3.5,
  active: true,
  contact: { city: "Almaty", email: "aibek@example.com" },
  skills: ["Java", "MongoDB"]
});

// 4. Добавляем оставшиеся документы (insertMany) - итого 10 штук
db.students.insertMany([
  {
    studentId: 1002,
    name: "Aliya",
    age: 19,
    group: "IS-24-21",
    gpa: 3.8,
    active: true,
    contact: { city: "Almaty", email: "aliya@example.com" },
    skills: ["Python", "MongoDB"]
  },
  {
    studentId: 1003,
    name: "Damir",
    age: 21,
    group: "IS-24-22",
    gpa: 2.9,
    active: false,
    contact: { city: "Astana", email: "damir@example.com" },
    skills: ["Java", "Docker"]
  },
  {
    studentId: 1004,
    name: "Dina",
    age: 20,
    group: "IS-24-21",
    gpa: 3.9,
    active: true,
    contact: { city: "Almaty", email: "dina@example.com" },
    skills: ["Python", "SQL", "MongoDB"]
  },
  {
    studentId: 1005,
    name: "Arman",
    age: 22,
    group: "IS-24-22",
    gpa: 2.7,
    active: false,
    contact: { city: "Shymkent", email: "arman@example.com" },
    skills: ["C++", "Linux"]
  },
  {
    studentId: 1006,
    name: "Madina",
    age: 19,
    group: "IS-24-21",
    gpa: 3.6,
    active: true,
    contact: { city: "Almaty", email: "madina@example.com" },
    skills: ["Java", "Spring", "MongoDB"]
  },
  {
    studentId: 1007,
    name: "Sultan",
    age: 21,
    group: "IS-24-23",
    gpa: 3.1,
    active: true,
    contact: { city: "Astana", email: "sultan@example.com" },
    skills: ["JavaScript", "React"]
  },
  {
    studentId: 1008,
    name: "Elena",
    age: 20,
    group: "IS-24-22",
    gpa: 3.4,
    active: true,
    contact: { city: "Almaty", email: "elena@example.com" },
    skills: ["Python", "Docker"]
  },
  {
    studentId: 1009,
    name: "Nurlan",
    age: 23,
    group: "IS-24-23",
    gpa: 2.5,
    active: false,
    contact: { city: "Karaganda", email: "nurlan@example.com" },
    skills: ["HTML", "CSS"]
  },
  {
    studentId: 1010,
    name: "Kira",
    age: 18,
    group: "IS-24-21",
    gpa: 3.2,
    active: false,
    contact: { city: "Almaty", email: "kira@example.com" },
    skills: ["Java", "MongoDB"]
  }
]);

// 5. Выполняем обновления (Update)
db.students.updateOne({ studentId: 1001 }, { $set: { gpa: 3.8 } });
db.students.updateOne({ studentId: 1001 }, { $inc: { age: 1 } });
db.students.updateOne({ studentId: 1001 }, { $push: { skills: "Docker" } });
db.students.updateMany({ group: "IS-24-21" }, { $set: { status: "active" } });

// 6. Выполняем удаление одного студента (Delete)
db.students.deleteOne({ studentId: 1010 });

// 7. ПОСЛЕДНЯЯ КОМАНДА: Выводим все документы, чтобы Playground отобразил результат
db.students.find();