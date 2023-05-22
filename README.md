# Dynamic-API-Test-Suite-Generator

Update `tests.yml` with specifications for your API tests, and this app will dynamically generate a test suite for the given endpoints.


## Usage
In `tests.yml`, populate an array of tests. Each test has the following properties:
- `name` : [string] ie, the name of the test
- `url` : [string] ie the endpoint of the API test
- `method` : [string] ie which HTTP method you want the test client to use for this test
- `headers` : [array] an array of the headers to be included in the test
    - `name` : [string] the name of the header (eg `bearer`)
    