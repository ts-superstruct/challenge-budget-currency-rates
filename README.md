# Challenge - Budget Currency Rates

The challenge is to create a web application that finds a project's final budget in USD based on name & converts the currecy to Trinidad and Tobago dollar (TTD).

Should also be able to add, update and delete project budget data.

The application should have the following API - 
1. Find budget details for projects in TTD with specified name within specified year.

```
// POST /api/project/budget/currency - Request Example Body
{
	"year": 2024,
	"name": "Humitas Hewlett Packard",
	"currency": "TTD"
}
```
```
// POST /api/project/budget/currency - Response Example Body
{
	"success": true,
	"data": [{
		"Project ID": "1",
		"Project Name": "Humitas Hewlett Packard",
		"Year": "2024",
		"Currency": "EUR",
		"Initial Budget (Local)": "316974.50",
		"Budget (USD)": "233724.23",
		"Initial Schedule Estimate (Months)": "13",
		"Adjusted Schedule Estimate (Months)": "12",
		"Contingency Rate (%)": "2.19",
		"Escalation Rate (%)": "3.46",
		"Final Budget (USD)": "247106.75",
		"Converted Budget (TTD)": "1682000.00" // calculated based on the currency rate for the year
	}]
}
```

2. Add project budget data to the database
```
// POST /api/project/budget - Request Example Body
{
	"Project ID": "10001",
	"Project Name": "Humitas Butterfly",
	"Year": "2024",
	"Currency": "EUR",
	"Initial Budget (Local)": "316974.50",
	"Budget (USD)": "233724.23",
	"Initial Schedule Estimate (Months)": "13",
	"Adjusted Schedule Estimate (Months)": "12",
	"Contingency Rate (%)": "2.19",
	"Escalation Rate (%)": "3.46",
	"Final Budget (USD)": "247106.75"
}

```

3. Update project budget data in the database
```
// PUT /api/project/budget/:id - Request Example Body

{
	"Project Name": "Humitas Butterfly",
	"Year": "2024",
	"Currency": "EUR",
	"Initial Budget (Local)": "316974.50",
	"Budget (USD)": "233724.23",
	"Initial Schedule Estimate (Months)": "13",
	"Adjusted Schedule Estimate (Months)": "12",
	"Contingency Rate (%)": "2.19",
	"Escalation Rate (%)": "3.56",
	"Final Budget (USD)": "347106.75"
}

```

4. Delete project budget data from the database
```
// DELETE /api/project/budget/:id

```


# Requirements
1. Use Redis for persistence
2. New project budget data should be added to the database in same format as existing seed -

	```
	npm run db:seed
	``` 
2. Use a currency conversion API to get historical currency rates ([app.exchangerate-api.com](https://www.exchangerate-api.com/))
3. API Tests
    - Each endpoint should have its own test
    - Write all tests in test/endpoints.js
    - Use `servertest` to test the endpoints

# Instructions
1. Create a new repo in your account and note the git url
2. Clone this repo
3. Solve the challenge, following our [coding guidelines](https://github.com/superstruct-tech/onboarding)
4. Set your new repo as the origin: `git remote set-url origin ${your repo url}`
5. Push your solution to your repo

You must follow these steps for your solution to be accepted -- forks or other methods will not be considered.
