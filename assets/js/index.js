'use strict';

const form = document.getElementById('contact-form');

function formSubmitHandler(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('.interactive-element');
  // Створений об'єкт, в який запаковано усі значення полів форми
  const userMessage = new UserMessage(
    Object.fromEntries(
      [...inputs].map((element) => [element.name, element.value])
    )
  );
  console.table(userMessage);
}

form.addEventListener('submit', formSubmitHandler);
