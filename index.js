// Шаг 1: Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
const grades = Array.from(
  { length: 12 },
  () => Math.floor(Math.random() * 100) + 1
);

// Шаг 2: Рассчитайте и выведите средний балл студентов, используя методы массивов.
const averageGrade =
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
document.getElementById("averageGrade").textContent = averageGrade.toFixed(2);

// Шаг 3: Находим и выводим максимальный балл
const maxGrade = Math.max(...grades);
document.getElementById("maxGrade").textContent = maxGrade;

// Шаг 4: Находим и выводим минимальный балл
const minGrade = Math.min(...grades);
document.getElementById("minGrade").textContent = minGrade;

// Шаг 5: Считаем и выводим количество студентов с положительной оценкой
const positiveGradesCount = grades.filter((grade) => grade >= 60).length;
document.getElementById("positiveGradesCount").textContent =
  positiveGradesCount;

// Шаг 6: Считаем и выводим количество студентов с отрицательной оценкой
const negativeGradesCount = grades.filter((grade) => grade < 60).length;
document.getElementById("negativeGradesCount").textContent =
  negativeGradesCount;

// Шаг 7: Преобразуем числовые оценки в буквенные и выводим результат, согласно условиям
const letterGrades = grades.map((grade) => {
  if (grade >= 80) return "A";
  else if (grade >= 60) return "B";
  else if (grade >= 40) return "C";
  else if (grade >= 20) return "D";
  else return "E";
});

document.getElementById("letterGrades").textContent = letterGrades.join(", ");
