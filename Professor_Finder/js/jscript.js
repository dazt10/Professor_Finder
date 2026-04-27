const toggleButton = document.getElementById('menuButton');
const buttonText = document.getElementById('button-text');
const menuList = document.getElementById('menuList');
const menuItems = document.querySelectorAll('.program-name');

// Toggle menu visibility
toggleButton.addEventListener('click', (e) => {
  menuList.classList.toggle('show');
  e.stopPropagation();
});

// Logic to change button text
menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the link from following the '#'
    
    // 1. Get the text from the clicked item
    const selectedText = item.textContent;
    
    // 2. Update the button's text
    buttonText.textContent = selectedText;
    
    // 3. Close the menu after selection
    menuList.classList.remove('show');
  });
});

// Close if clicking outside
window.addEventListener('click', () => {
  menuList.classList.remove('show');
});

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // ... previous code ...

    // Remove 'active' class from all items
    menuItems.forEach(el => el.classList.remove('active'));
    
    // Add 'active' class to the one we just clicked
    item.classList.add('active');
  });
});