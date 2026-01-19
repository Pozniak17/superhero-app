import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "./HeroForm.styled";
import { addHero } from "../../redux/operations";

export const HeroForm = () => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.heroes.isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData();

    // Збираємо дані
    formData.append("nickname", form.elements.nickname.value);
    formData.append("real_name", form.elements.real_name.value);
    formData.append(
      "origin_description",
      form.elements.origin_description.value,
    );
    formData.append("superpowers", form.elements.superpowers.value);
    formData.append("catch_phrase", form.elements.catch_phrase.value);

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    const result = dispatch(addHero(formData));

    // Перевіряємо, чи все пройшло успішно
    if (addHero.fulfilled.match(result)) {
      alert("Hero successfully created!");
      form.reset();
      setFiles([]);
    } else {
      alert("Failed to create hero: " + result.payload);
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

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Hero"}
      </button>
    </Form>
  );
};
