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

export function determineTagColor2(title: string) {
  let color = "bg-spring-blue"; // Default spring blue color
  console.log(title)

  switch (title){
    case "DesaPOS":
      color = "bg-[#FF69B4]"; // Hot Pink
      break;
    case "SolveEase TradeStream":
      color = "bg-[#32CD32]"; // Lime Green
      break;
    case "SIMEDEASE":
      color = "bg-[#1E90FF]"; // Dodger Blue
      break;
    case "Smartmedic+":
      color = "bg-[#00BFFF]"; // Deep Sky Blue
      break;
    case "Solve Loyaltease":
      color = "bg-[#FF8C00]"; // Dark Orange
      break;
    default:
      color = "bg-[#00BFFF]"; // Deep Sky Blue
      break;
  }

  return color;
}
