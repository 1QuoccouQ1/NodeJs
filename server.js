const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint để xử lý yêu cầu đăng nhập
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // console.log("data");

    // const data = fs.readFileSync('./user.txt', 'utf8');
    // console.log(data);


    // Đọc dữ liệu từ file user.txt (thay đổi đường dẫn nếu cần)
    // fs.readFileSync('./user.txt', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Server error' });
    //         return;
    //     }

    //     // Tách dữ liệu thành từng dòng
    //     const lines = data.split('\n');

    //     // Tìm kiếm tài khoản trong file
    //     for (let line of lines) {
    //         const [storedUsername, storedPassword] = line.split(':');
    //         console.log(storedUsername)
    //         console.log(storedPassword)
    //         if (username === storedUsername && password === storedPassword) {
    //             // Trả về form HTML nếu đăng nhập thành công
    //             res.send(`
    //                 <h1>Welcome, ${username}!</h1>
    //                 <p>You are logged in.</p>
    //             `);
    //             return;
    //         }
    //     }

    //     // Trả về thông báo lỗi nếu không tìm thấy tài khoản
    //     res.status(401).send(`
    //         <h1>Login Failed</h1>
    //         <p>Invalid username or password.</p>
    //     `);
    // });
});

// Endpoint để phục vụ trang HTML khi truy cập trang chính
app.get('/', (req, res) => {
    // Trả về form đăng nhập
    res.send(`
        <form id="loginForm" action="/login" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

// Mở cổng và lắng nghe yêu cầu
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
