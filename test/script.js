document.querySelector('#sumpywimpy').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    console.log(formValues.sym1); // Do something with the form values
  });