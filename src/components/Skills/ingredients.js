

export const allIngredients = [
  { icon: "🤖", label: "Languages", skills: ["Python", "Java", "C/C++","JavaScript", "TypeScript","C#"]},
  { icon: "🌐", label: "Web Dev"  ,skills: ["React", "Angular", "Node.Js","Express.Js", "Boostrap","Spring Boot"]},
  { icon: "🦾", label: "Others"  ,skills: ["Oracle DB", "MySql", "Mongo DB","AWS", "TensorFlow","Microsoft Office Suite"]},
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];
export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
