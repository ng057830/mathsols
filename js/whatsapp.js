const whatsappButton = document.getElementById("whatsAppButton");
whatsappButton.addEventListener("click", () => {
  const message = encodeURIComponent(
    "Hola, necesito ayuda con una tarea matemática."
  );
  const whatsappURL = `https://wa.me/5732447044444?text=${message}`;
  window.open(whatsappURL, "_blank");
});
