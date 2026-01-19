import Joi from "joi";

export const heroJoiSchema = Joi.object({
  nickname: Joi.string().min(2).max(30).required(),
  real_name: Joi.string().min(2).max(50).required(),
  origin_description: Joi.string().min(10).required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
  existingImages: Joi.string().optional(),
  images: Joi.any(),
});
