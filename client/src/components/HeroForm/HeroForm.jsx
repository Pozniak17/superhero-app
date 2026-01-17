import { useState } from "react";
import axios from "axios";
import { Form } from "./HeroForm.styled";

export const HeroForm = () => {
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // 1. Створюємо об'єкт FormData (це обов'язково для передачі файлів)
    const formData = new FormData();

    // 2. Додаємо текстові поля згідно з ТЗ
    formData.append("nickname", form.elements.nickname.value);
    formData.append("real_name", form.elements.real_name.value);
    formData.append(
      "origin_description",
      form.elements.origin_description.value
    );
    formData.append("superpowers", form.elements.superpowers.value);
    formData.append("catch_phrase", form.elements.catch_phrase.value);

    // 3. Додаємо всі вибрані файли в поле "images"
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    try {
      const response = await axios.post(
        "https://superhero-app-0he6.onrender.com/heroes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Hero created:", response.data);
      alert("Героя успішно створено!");
      form.reset(); // Очищуємо форму
      setFiles([]);
    } catch (err) {
      console.error("Помилка створення:", err);
      alert("Не вдалося створити героя");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Nickname *</label>
      <input name="nickname" type="text" placeholder="e.g. Superman" required />

      <label>Real Name</label>
      <input name="real_name" type="text" placeholder="e.g. Clark Kent" />

      <label>Origin Description</label>
      <textarea
        name="origin_description"
        rows="3"
        placeholder="How it all started..."
      />

      <label>Superpowers</label>
      <textarea name="superpowers" rows="2" placeholder="Flight, Strength..." />

      <label>Catch Phrase</label>
      <input name="catch_phrase" type="text" placeholder="Up, up and away!" />

      <label>Photos (you can select multiple)</label>
      <input
        type="file"
        name="images"
        accept="image/*"
        multiple
        onChange={(e) => setFiles(e.target.files)}
      />

      <button type="submit">Create Hero</button>
    </Form>
  );
};
