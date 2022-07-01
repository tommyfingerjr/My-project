// @ts-check
require('dotenv').config();
const { test, expect } = require('@playwright/test');

//import Authenticator generateToken function
import {generateToken} from "authenticator"

//generate OTP using secret key
const otp = generateToken(process.env.GitHUbtoken)
 
const url = process.env.URL
const Login = process.env.Login
const GitHubpassword = process.env.GitHubpassword
const GitHUbtoken = process.env.GitHUbtoken

  test('Git Hub login with 2FA', async ({ page }) => {
    await page.goto('https://github.com/');
    await page.click('.HeaderMenu-link.flex-shrink-0.no-underline');
    await page.click('#login_field');
    await page.fill('#login_field',(Login));
    await page.click('#password');
    await page.fill('#password',(GitHubpassword));
    await page.click ('.btn.btn-primary.btn-block.js-sign-in-button')
    await page.click('#otp');
    await page.fill('#otp',otp)
    await page.click("//span[text()='Հաջորդը']");

  }); 

