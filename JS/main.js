function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
function showAlert() { 
    Swal.fire({
        title: "Thank You!",
        text: "We will be in touch ASAP!",
        icon: "success"
      });
}
// ----------------------------
