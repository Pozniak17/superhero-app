import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "./HeroForm.styled";
import { addHero, updateHero } from "../../redux/operations"; // Додали updateHero

// Додаємо пропси: initialData (об'єкт героя), isEditing (булеве), onSuccess (закриття модалки)
export const HeroForm = ({
  initialData = null,
  isEditing = false,
  onSuccess = null,
}) => {
  const [files, setFiles] = useState([]);

  // Стейт для збереження старих фото (тільки при редагуванні)
  const [existingImages, setExistingImages] = useState(
    initialData?.images || [],
  );

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.heroes.isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData();

    // Збираємо дані через form.elements
    formData.append("nickname", form.elements.nickname.value);
    formData.append("real_name", form.elements.real_name.value);
    formData.append(
      "origin_description",
      form.elements.origin_description.value,
    );
    formData.append("superpowers", form.elements.superpowers.value);
    formData.append("catch_phrase", form.elements.catch_phrase.value);

    // Додаємо НОВІ файли з інпуту
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    // Якщо редагуємо, додаємо список СТАРИХ фото, які залишилися
    if (isEditing) {
      formData.append("existingImages", JSON.stringify(existingImages));
    }

    // Вибираємо дію залежно від режиму
    let result;
    if (isEditing) {
      result = await dispatch(updateHero({ id: initialData._id, formData }));
    } else {
      result = await dispatch(addHero(formData));
    }

    // Обробка результату
    if (addHero.fulfilled.match(result) || updateHero.fulfilled.match(result)) {
      alert(isEditing ? "Hero updated!" : "Hero created!");
      if (!isEditing) form.reset();
      setFiles([]);
      if (onSuccess) onSuccess(); // Закриваємо модалку
    } else {
      alert("Error: " + result.payload);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Nickname *</label>
      <input
        name="nickname"
        defaultValue={initialData?.nickname || ""}
        required
      />

      <label>Real Name</label>
      <input name="real_name" defaultValue={initialData?.real_name || ""} />

      <label>Origin Description</label>
      <textarea
        name="origin_description"
        rows="3"
        defaultValue={initialData?.origin_description || ""}
      />

      <label>Superpowers</label>
      <textarea
        name="superpowers"
        rows="2"
        defaultValue={initialData?.superpowers || ""}
      />

      <label>Catch Phrase</label>
      <input
        name="catch_phrase"
        defaultValue={initialData?.catch_phrase || ""}
      />

      {/* СЕКЦІЯ РЕДАГУВАННЯ ФОТО */}
      {isEditing && existingImages.length > 0 && (
        <div>
          <label>Existing Photos (click X to remove):</label>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            {existingImages.map((img, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                <img
                  src={img}
                  alt="hero"
                  width="60"
                  height="60"
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
                <button
                  type="button"
                  onClick={() =>
                    setExistingImages((prev) =>
                      prev.filter((item) => item !== img),
                    )
                  }
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <label>{isEditing ? "Add more photos" : "Photos"}</label>
      <input
        type="file"
        name="images"
        accept="image/*"
        multiple
        onChange={(e) => setFiles(e.target.files)}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading
          ? "Processing..."
          : isEditing
            ? "Save Changes"
            : "Create Hero"}
      </button>
    </Form>
  );
};
