export function determineTagColor(tag: string) {
  let color = "bg-spring-blue"; // Default spring blue color

  switch (tag) {
    case "Website":
      color = "bg-[#FF69B4]"; // Hot Pink
      break;
    case "Customer Platform":
      color = "bg-[#1E90FF]"; // Dodger Blue
      break;
    case "Mobile":
      color = "bg-[#32CD32]"; // Lime Green
      break;
    default:
      color = "bg-[#00BFFF]"; // Deep Sky Blue
      break;
  }

  return color;
}
