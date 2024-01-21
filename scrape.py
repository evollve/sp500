import requests
import pandas as pd
from io import StringIO

# URL of the webpage to be scraped
url = 'https://www.slickcharts.com/sp500'

# Fetch the webpage content
response = requests.get(url, headers={'User-agent': 'Mozilla/5.0'})

# Use StringIO to wrap the HTML content
html_content = StringIO(response.text)

# Use pandas to read the table from the wrapped HTML content
df = pd.read_html(html_content)[0]

# Saving the DataFrame to a JSON file
df.to_json('sp500.json', orient='records', lines=True)

# Print a confirmation message
print("Data saved to sp500.json")