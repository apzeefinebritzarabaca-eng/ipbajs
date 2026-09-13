document.addEventListener('DOMContentLoaded', () => {
  const showMessageBtn = document.getElementById('showMessageBtn');
  const messageDisplay = document.getElementById('messageDisplay');

  const environmentalMessage =
    "Maintaining balanced fish tanks, ponds, and aquatic environments is essential for our environment. " +
    "Overcrowding ponds, tanks, and other aquatic environments severely lowers oxygen levels, " +
    "increases dangerous waste products like ammonia, and spreads disease rapidly among aquatic life. " +
    "Protecting these ecosystems—whether small or big—can make a huge difference to our environment. " +
    "Aquariums and natural bodies of water play a crucial role in preserving environmental balance. " +
    "This script is connected to our idea because it showcases one of the best solutions and tips to our problem.";

  if (showMessageBtn && messageDisplay) {
    showMessageBtn.addEventListener('click', () => {
      messageDisplay.textContent = environmentalMessage;
      messageDisplay.style.display = 'block';
    });
  }
});
