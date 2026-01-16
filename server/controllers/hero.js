import Hero from "../models/hero.js";
import { getAllHeroes } from "../services/heroes.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";

async function getHerous(req, res, next) {
  const { page, perPage } = parsePaginationParams(req.query);

  try {
    // Просто викликаємо функцію сервісу
    const herous = await getAllHeroes({ page, perPage });

    res.json({
      status: 200,
      message: "Successfully found heroes!",
      ...herous,
    });
  } catch (error) {
    next(error);
  }
}

async function getHeroById(req, res, next) {
  const { id } = req.params;
  try {
    const hero = await Hero.findById(id);

    if (hero === null) {
      return res.status(404).send({ message: "Hero not found" });
    }
    res.send(hero);
  } catch (error) {
    next(error);
  }
}

async function createHero(req, res, next) {
  // Add Joi before
  const hero = {
    nickname: req.body.nickname,
    real_name: req.body.real_name,
    origin_description: req.body.origin_description,
    superpowers: req.body.superpowers,
    catch_phrase: req.body.catch_phrase,
  };

  try {
    const result = await Hero.create(hero);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
}

async function updateHero(req, res, next) {
  const { id } = req.params;
  // Add Joi before
  const hero = {
    nickname: req.body.nickname,
    real_name: req.body.real_name,
    origin_description: req.body.origin_description,
    superpowers: req.body.superpowers,
    catch_phrase: req.body.catch_phrase,
  };

  try {
    const result = await Hero.findByIdAndUpdate(id, hero, { new: true });

    if (result === null) {
      return res.status(404).send({ message: "Hero not found" });
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
}

async function deleteHero(req, res, next) {
  const { id } = req.params;
  try {
    const result = await Hero.findByIdAndDelete(id);

    if (result === null) {
      return res.status(404).send({ message: "Hero not found" });
    }

    res.send({ id });
  } catch (error) {
    next(error);
  }
}

export default {
  getHerous,
  getHeroById,
  createHero,
  updateHero,
  deleteHero,
};
