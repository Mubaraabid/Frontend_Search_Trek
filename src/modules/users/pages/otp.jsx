<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Page</title>
    
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .otp-container {
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }

        .otp-input {
            padding: 10px;
            margin: 10px;
            font-size: 16px;
            text-align: center;
        }

        .otp-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        .otp-button {
            padding: 10px;
            width: 48%;
            cursor: pointer;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
        }

        .otp-button.Re-generate {
            background-color: #6d7073;
        }
    </style>
</head>
<body>

<div class="otp-container">
    <h2>Enter OTP</h2>
    <input type="text" class="otp-input" placeholder="Enter OTP">
    <div class="otp-buttons">
        <button class="otp-button Re-generate">Re-generate</button>
        <button class="otp-button">Submit</button>
    </div>
</div>

</body>
</html>

