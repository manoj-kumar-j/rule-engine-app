document.getElementById('evaluationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const ruleString = document.getElementById('ruleString').value;
    const age = document.getElementById('age').value;
    const income = document.getElementById('income').value;
    const spend = document.getElementById('spend').value;
    const department = document.getElementById('department').value;
    
    try {
        // Send data to backend for rule evaluation
        const response = await fetch('http://localhost:5000/api/rules/evaluate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ruleString,
                userData: {
                    age: Number(age),
                    income: Number(income),
                    spend: Number(spend),
                    department
                }
            })
        });

        // Parse the response JSON
        const result = await response.json();

        // Display the result with animation
        const resultElement = document.getElementById('result');
        resultElement.innerText = result.result ? 'Eligible' : 'Not Eligible';
        resultElement.style.opacity = '0';  // Reset opacity before animation
        resultElement.classList.add('fadeInResult');

        // Optional: Delay before reloading the page to show the result for a few seconds
        setTimeout(() => {
            window.location.reload(); // Reload the page after showing the result
        }, 5000); // Reload after 5 seconds

    } catch (error) {
        console.error('Error:', error);
    }
});
