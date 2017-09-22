<h1>CareerDevs Finance Agile Week</h1>
<p>Get your own AlphaAdvantage api key at <a href="https://www.alphavantage.co/">Alpha Advantage</a></p>


<h1>Get MeanFinanace Started<h1>
<ol>
<li>cd to meanfinance folder</li>
<li>run ./mongod (if fails use --repair trick)</li>
<li>npm start (if app ever stops running you might have to npm start again)</li>
</ol>

<h1>Group Changes<h1>
<h3>Deposit Funds Page</h3>
<ol>
<li>Prevent negative balance from being added (/public/angular-app/deposit/deposit-controller.js --- line 12-14)</li>
<li>Give User Feedback on attempt to deposit negative number (/public/angular-app/deposit/deposit-controller.js --- line 21)</li>
<li>When funds are increased improved message "Balance increased by $100." (/public/angular-app/deposit/deposit-controller.js --- line 18)</li>
</ol>

<h3>Buy Stock</h3>
<ol>
<li>Added message when stocks are purchased (/public/angular-app/buy/buy-controller.js --- line 17)</li>
</ol>

<h3>Dashboard</h3>
<ol>
<li>Stock Purchases displayed (/public/angular-app/dashboard/dashboard.html --- lines 10-14 only commented out 13)</li>
</ol>