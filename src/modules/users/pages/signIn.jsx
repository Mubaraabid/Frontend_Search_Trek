<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700">
<title>Bootstrap login Form Horizontal</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
    body {
        color: #999;
        background: #f3f3f3;
        font-family: 'Roboto', sans-serif;
    }
    .form-control {
        border-color: #eee;
        min-height: 41px;
        box-shadow: none !important;
    }
    .form-control:focus {
        border-color: #5cd3b4;
    }
    .form-control, .btn {        
        border-radius: 3px;
    }
    .login-form {
        width: 500px;
        margin: 0 auto;
        padding: 30px 0;
    }
    .login-form h2 {
        color: #333;
        margin: 0 0 30px 0;
        display: inline-block;
        padding: 0 30px 10px 0;
        border-bottom: 3px solid #5cd3b4;
    }
    .login-form form {
        color: #999;
        border-radius: 3px;
        margin-bottom: 15px;
        background: #fff;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form .form-group row {
        margin-bottom: 20px;
    }
    .login-form label {
        font-weight: normal;
        font-size: 14px;
        line-height: 2;
    }
    .login-form input[type="checkbox"] {
        position: relative;
        top: 1px;
    }
    .login-form .btn {        
        font-size: 16px;
        font-weight: bold;
        background: #5cd3b4;
        border: none;
        margin-top: 20px;
        min-width: 140px;
    }
    .login-form .btn:hover, .signup-form .btn:focus {
        background: #41cba9;
        outline: none !important;
    }
    .login-form a {
        color: #5cd3b4;
        text-decoration: underline;
    }
    .login-form a:hover {
        text-decoration: none;
    }
    .login-form form a {
        color: #5cd3b4;
        text-decoration: none;
    }	
    .login-form form a:hover {
        text-decoration: underline;
    }
    </style>
    </head>
    <body>
    <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post" class="form-horizontal">
              <div class="row">
                <div class="col-8 offset-4">
                    <h2>Login</h2>
                </div>	
              </div>			
            <div class="form-group row">
                <label class="col-form-label col-4">Email Address</label>
                <div class="col-8">
                    <input type="email" class="form-control" name="email" required="required">
                </div>        	
            </div>
            <div class="form-group row">
                <label class="col-form-label col-4">Password</label>
                <div class="col-8">
                    <input type="password" class="form-control" name="password" required="required">
                    </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-8 offset-4">
                            <p><label class="form-check-label"><input type="checkbox"  required="required"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>.</label></p>
                            <button type="submit" class="btn btn-primary btn-lg">login</button>
                        </div>  
                    </div>		      
                </form>
        </body>
        </html>
