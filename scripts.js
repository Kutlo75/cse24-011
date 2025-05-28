
  document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', event => {
      const loanType = event.target.getAttribute('data-loan');
      document.getElementById('loanApplyModalLabel').textContent = `Apply for ${loanType}`;
      document.getElementById('loanTypeInput').value = loanType;
    });
  });

  document.getElementById('loanApplicationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // remove this line when using real PHP backend
    alert("✅ Application submitted successfully! We'll be in touch.");
    bootstrap.Modal.getInstance(document.getElementById('loanApplyModal')).hide();
    this.reset();
  });
