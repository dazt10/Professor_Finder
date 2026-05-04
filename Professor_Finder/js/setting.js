// ====== MODALS ======

// === Name ===
const nameModal = document.getElementById("nameModal");
const openName = document.querySelector("#nameRow");
const closeName = document.querySelector("#closeName");

// Open modal
openName.addEventListener("click", () => {
    nameModal.classList.add("show");
});

// Close modal
closeName.addEventListener("click", () => {
    nameModal.classList.remove("show");
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === nameModal) {
        nameModal.classList.remove("show");
    }
});

// === Username ===
const usernameModal = document.getElementById("usernameModal");
const openUsername = document.querySelector("#usernameRow");
const closeUsername = document.querySelector("#closeUsername");

// Open modal
openUsername.addEventListener("click", () => {
    usernameModal.classList.add("show");
});

// Close modal
closeUsername.addEventListener("click", () => {
    usernameModal.classList.remove("show");
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === usernameModal) {
        usernameModal.classList.remove("show");
    }
});

// === Password ===
const passwordModal = document.getElementById("passwordModal");
const openPassword = document.querySelector("#passwordRow");
const closePassword = document.querySelector("#closePassword");

// Open modal
openPassword.addEventListener("click", () => {
    passwordModal.classList.add("show");
});

// Close modal
closePassword.addEventListener("click", () => {
    passwordModal.classList.remove("show");
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === passwordModal) {
        passwordModal.classList.remove("show");
    }
});

// === Delete Account ===
const deleteAccountModal = document.getElementById("deleteAccountModal");
const openDeleteAccount = document.querySelector("#deleteAccountRow");
const closeDeleteAccount = document.querySelector("#cancelDelete");

// Open modal
openDeleteAccount.addEventListener("click", () => {
    deleteAccountModal.classList.add("show");
});

// Close modal
closeDeleteAccount.addEventListener("click", () => {
    deleteAccountModal.classList.remove("show");
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === deleteAccountModal) {
        deleteAccountModal.classList.remove("show");
    }
});
