document.addEventListener('DOMContentLoaded', function () {
  const poses = document.querySelectorAll('.pose');
  const names = document.querySelectorAll('.name');
  const result = document.querySelector('.game__result');

  let draggedItem = null;

  names.forEach(name => {
    name.addEventListener('dragstart', function () {
      draggedItem = name;
      setTimeout(() => (name.style.display = 'none'), 0);
    });

    name.addEventListener('dragend', function () {
      setTimeout(() => (name.style.display = 'block'), 0);
      draggedItem = null;
    });
  });

  poses.forEach(pose => {
    pose.addEventListener('dragover', function (e) {
      e.preventDefault();
    });

    pose.addEventListener('dragenter', function (e) {
      e.preventDefault();
      this.style.backgroundColor = '#f0f0f0';
    });

    pose.addEventListener('dragleave', function () {
      this.style.backgroundColor = 'transparent';
    });

    pose.addEventListener('drop', function () {
      this.style.backgroundColor = 'transparent';
      if (this.dataset.name === draggedItem.textContent) {
        this.appendChild(draggedItem);
        result.textContent = 'Correct!';
        result.style.color = 'green';
      } else {
        result.textContent = 'Try again!';
      }
    });
  });
});
