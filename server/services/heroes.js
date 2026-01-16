import Hero from "../models/hero.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export async function getAllHeroes({ page, perPage }) {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  // Запускаємо обидва запити одночасно (це швидше)
  const [heroesCount, heroes] = await Promise.all([
    Hero.countDocuments(), // Рахуємо загальну кількість
    Hero.find().skip(skip).limit(limit).exec(), // Отримуємо шматок даних
  ]);

  const paginationData = calculatePaginationData(heroesCount, perPage, page);

  return {
    items: heroes, // список героїв
    ...paginationData, // дані пагінації (totalPages, hasNextPage тощо)
  };
}
