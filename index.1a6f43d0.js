!function(){var e={openModalBtns:document.querySelectorAll("[data-modal-header-open]"),closeModalBtn:document.querySelector("[data-modal-header-close]"),modal:document.querySelector("[data-modal-header]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach((function(e){return e.addEventListener("click",o)})),e.closeModalBtn.addEventListener("click",o),e.body.addEventListener("click",(function(o){var d=document.querySelector("div.header-form__backdrop");o.target===d&&e.modal.classList.toggle("is-hidden")}))}();
//# sourceMappingURL=index.1a6f43d0.js.map