document.querySelectorAll('#opcoes2 input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        document.querySelectorAll('#opcoes2 input[type="checkbox"]').forEach(function(otherCheckbox) {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      } else {
      }
    });
});