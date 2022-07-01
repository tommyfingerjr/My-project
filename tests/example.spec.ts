// @ts-check
require('dotenv').config();
const { test, expect } = require('@playwright/test');

//import Authenticator generateToken function
import {generateToken} from "authenticator"

//generate OTP using secret key
const otp = generateToken(process.env.otpToken)
 
const url = process.env.URL
const Login = process.env.Login
const Password = process.env.Password
const otpToken = process.env.otpToken

  test('Login to Google with Two-Factor Authentication', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.click('.gb_1.gb_2.gb_8d.gb_8c');
    await page.click("//*[@id='identifierId']");
    await page.fill("//*[@id='identifierId']",(Login));
    await page.click("//span[text()='Հաջորդը']");
    await page.click("//input[@type='password']");
    await page.fill("//input[@type='password']",(Password));
    await page.click("//span[text()='Հաջորդը']");
    await page.click('#totpPin');
    await page.fill('#totpPin',otp,)
    await page.click("//span[text()='Հաջորդը']");

  }); 
  