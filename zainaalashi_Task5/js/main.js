function joinNow() {
  alert("تم الضغط على زر انضم إلينا!");
  // لاحقًا تقدر:
  // window.location.href = "contact.html";
}


document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault(); // يمنع الريفريش

  // تفريغ حقل الإيميل
  this.reset();

  // إظهار رسالة النجاح
  document.getElementById("subscribeSuccess").style.display = "block";
});

