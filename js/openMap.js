function openMap(e) {
  e.preventDefault();
  // lat і lng - координати мітки:
  const lat = 48.501886457926275;
  const lng = 32.25578208412353;

  // Формація URL для мапи Google з вказаними координатами:
  const url = "https://www.google.com/maps?q=" + lat + "," + lng;
  // Відкрити посилання у новому вікні:
  window.open(url, "_blank");
}
