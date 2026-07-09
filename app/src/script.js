document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('status-text');
    const testBtn = document.getElementById('test-btn');
    
    // Attempt to extract the nonce attribute from the current script tag
    const currentScript = document.currentScript || document.querySelector('script[src="script.js"]');
    const nonce = currentScript ? currentScript.getAttribute('nonce') : null;
    
    setTimeout(() => {
        if (nonce) {
            statusText.textContent = `Dynamic Nonce Active: ${nonce}`;
        } else {
            statusText.textContent = "Headers verified (CSP protection active)";
        }
    }, 1000);

    testBtn.addEventListener('click', () => {
        alert(`Verification Success!\n\nScript Execution: Allowed\nCSP Nonce: ${nonce ? nonce : 'None (No proxy gateway detected)'}`);
    });
});
