document.getElementById('process-btn').addEventListener('click', async () => {
    const fbstate = document.getElementById('fbstate-input').value;
    const output = document.getElementById('result-output');
    
    if (!fbstate) {
        output.textContent = 'Vui lòng nhập FBState';
        return;
    }
    
    try {
        const response = await fetch('/process-fbstate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fbstate }),
        });
        
        const data = await response.json();
        
        if (data.status === 'success') {
            output.textContent = JSON.stringify(data.data, null, 2);
        } else {
            output.textContent = 'Lỗi: ' + data.message;
        }
    } catch (error) {
        output.textContent = 'Lỗi kết nối: ' + error.message;
    }
});
